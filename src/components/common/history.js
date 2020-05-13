// THIS IS USED FOR IMPORTING A HISTORY WHERE PROPS ISNT SUPPLIED IE IN FUNCTIONS NOT CLASSES
import { createBrowserHistory } from "history";

/* export const createdHistory = () => {
      const basePath = BASENAME + "/";
      if (WEB_PACK_CONFIG_RUNNING === "production-config") {
            return createBrowserHistory({ basename: basePath });
      }
}; */

export default createBrowserHistory({ basename: BASEPATH + "/" });