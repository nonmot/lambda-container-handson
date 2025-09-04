import * as cdk from "aws-cdk-lib";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as ecr_assets from "aws-cdk-lib/aws-ecr-assets";
import * as apigw from "aws-cdk-lib/aws-apigateway";

export class AppStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const fn = new lambda.DockerImageFunction(this, "Fn", {
      code: lambda.DockerImageCode.fromImageAsset("../app", {
        platform: ecr_assets.Platform.LINUX_AMD64,
        file: 'Dockerfile',
      }),
      timeout: cdk.Duration.seconds(10),
      memorySize: 512,
      architecture: lambda.Architecture.X86_64
    });

    new apigw.LambdaRestApi(this, 'Api', { handler: fn });
  }
}
