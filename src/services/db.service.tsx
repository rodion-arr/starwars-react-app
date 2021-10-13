export const DbService = {
  async loadDbFile<Response>(url: string): Promise<null | Response> {
    try {
      return await (await fetch(url)).json();
    } catch (e: any) {
      console.error('Load DB failed', e.message);

      return null
    }
  }
};
