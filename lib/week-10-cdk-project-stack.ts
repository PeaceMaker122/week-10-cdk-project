import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

interface MyBucketProps {
    BucketName: string;
    versioned: boolean;
    encryption: s3.BucketEncryption;
}
export class Week10CdkProjectStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    const bucketProps: MyBucketProps = {
      BucketName: 'my-bucket-CDK-' + this.account,
      versioned: true,
      encryption: s3.BucketEncryption.S3_MANAGED
    };

    new s3.Bucket(this, 'MyBucket', bucketProps);

  }
}
