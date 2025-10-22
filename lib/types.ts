// Typescript Types

let bucketname: string = 'my-bucket';
let maxItems: number = 10;
let isPublic: boolean = true;
let tags: string[] = ['tag1', 'tag2', 'tag3']; // Array of strings

// Typescript Interface

interface MyBucketProps {
    BucketName: string;
    versioned: boolean;
    encryption: s3.BucketEncryption;
}