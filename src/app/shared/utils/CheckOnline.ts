import axios from "axios";

export async function CheckIfOnline(url: string): Promise<boolean> {
  try {
    const isOnline = await axios
      .get(url)
      .then((data) => {
        if (data.status === 200) {
          return true;
        }
        return false;
      })
      .catch((err) => {      
        return false;
      });
    return isOnline;
  } catch (err) {
    return false;
  }
}
