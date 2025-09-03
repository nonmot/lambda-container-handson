# lambda-container-handson
Handson for container-based Lambda

## 実行方法

```shell
docker build -t lambda-container .
docker run -p 9000:8080 lambda-container
curl -X POST http://localhost:9000/2015-03-31/functions/function/invocations -d '{}'
# {"statusCode":200,"body":"{\"message\":\"Hello from Lamnda Container\",\"event\":{}}"}
```
