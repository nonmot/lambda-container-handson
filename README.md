# lambda-container-handson
Handson for container-based Lambda

## Requirements

- aws-sam-cli
- Docker

## 実行方法

```shell
docker build -t lambda-container .
docker run -p 9000:8080 lambda-container
curl -X POST http://localhost:9000/2015-03-31/functions/function/invocations -d '{}'
# {"statusCode":200,"body":"{\"message\":\"Hello from Lamnda Container\",\"event\":{}}"}
```

## References

https://docs.aws.amazon.com/ja_jp/lambda/latest/dg/nodejs-image.html
https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/using-sam-cli-local-invoke.html
