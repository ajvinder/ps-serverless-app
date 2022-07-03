#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import 'source-map-support/register';
import { ApplicationStack } from '../lib/core';

const app = new cdk.App();
new ApplicationStack(app, 'ApplicationStack');
