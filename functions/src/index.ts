import { onRequest } from "firebase-functions/v2/https"
import * as logger from "firebase-functions/logger"

exports.sayHelloV2 = onRequest(
  {
    timeoutSeconds: 60,
    region: ["asia-northeast2"]
  },
  (req, res) => {
    logger.log("Hello!! V2")
    res.status(200).send("Hello V2 world!")
  }
)
