import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
import { S3Bucket } from '@aws-solutions-constructs/aws-s3-bucket';

// CONSTRUCTS

// --- L1 Constructs ---
export class L1BucketStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new s3.CfnBucket(this, 'MyL1Bucket', {
      bucketName: 'my-l1-bucket-' + this.account,
      versioningConfiguration: {
        status: 'Enabled'
      },
      publicAccessBlockConfiguration: {
        blockPublicAcls: true,
        blockPublicPolicy: true,
        ignorePublicAcls: true,
        restrictPublicBuckets: true
      }
    });
  }
}

// --- L2 Constructs ---
export class L2BucketStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new s3.Bucket(this, 'MyL2Bucket', {
      bucketName: 'my-l2-bucket-' + this.account,
      versioned: true,
      encryption: s3.BucketEncryption.S3_MANAGED,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });
  }
}

// --- L3 Constructs ---
export class L3BucketStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new S3Bucket(this, 'MyL3Bucket', {
      bucketName: 'my-l3-bucket-' + this.account,
      // This L3 construct automatically applies best practices, such as encryption, versioning, and access logging
    });
  }
}




// This code demonstrates the three levels of AWS CDK constructs (L1, L2, and L3) for creating S3 buckets:

// L1 (CfnBucket): Low-level CloudFormation resource with explicit configuration
// L2 (Bucket): Higher-level construct with more intuitive properties and built-in defaults
// L3 (S3Bucket from AWS Solutions Constructs): Highest-level pattern that automatically applies AWS best practices

// Each construct creates progressively more secure and well-configured buckets with less manual configuration required.