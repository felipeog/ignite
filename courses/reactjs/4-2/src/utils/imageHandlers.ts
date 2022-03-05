export const getPexelsMediumUrlById = (id: string) => {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&h=350`;
};

export const getPexelsLandscapeUrlById = (id: string) => {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200`;
};

export const getFlagUrlByAlpha2 = (alpha2: string) => {
  return `https://flagcdn.com/40x30/${alpha2}.png`;
};
