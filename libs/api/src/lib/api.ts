interface Reply {
  message: string;
}

export function api(): Reply {
  return { message: 'api' };
}
