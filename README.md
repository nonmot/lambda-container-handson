# lambda-container-handson
Handson for container-based Lambda

## Requirements

- aws-sam-cli
- Docker

## ローカルでのテスト

```shell
sam build
sam local start-api
curl http://localhost:3000/hello
```


## Lambdaへデプロイ

```shell
cd cdk
cdk bootstrap
cdk deploy
```

## References

https://docs.aws.amazon.com/ja_jp/lambda/latest/dg/nodejs-image.html
https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/using-sam-cli-local-invoke.html
