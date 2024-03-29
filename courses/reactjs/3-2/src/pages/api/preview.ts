import { Document } from '@prismicio/client/types/documents';
import { NextApiRequest, NextApiResponse } from 'next';

import { getPrismicClient } from '../../services/prismic';

function linkResolver(doc: Document): string {
  if (doc.type === 'posts') {
    return `/post/${doc.uid}`;
  }

  return '/';
}

export default async function preview(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const prismic = getPrismicClient();
  const { token: ref, documentId } = req.query;
  const redirectUrl = await prismic
    .getPreviewResolver(ref as string, documentId as string)
    .resolve(linkResolver, '/');

  if (!redirectUrl) {
    res.status(401).json({ message: 'Invalid token' });

    return;
  }

  res.setPreviewData({ ref });

  // Redirect the user to the share endpoint from same origin. This is
  // necessary due to a Chrome bug:
  // https://bugs.chromium.org/p/chromium/issues/detail?id=696204
  res.write(
    `<!DOCTYPE html>
      <html>
        <head>
          <meta http-equiv="Refresh" content="0; url=${redirectUrl}" />
          <script>window.location.href = '${redirectUrl}'</script>
        </head>`
  );

  res.end();
}
