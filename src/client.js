import {createClient} from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId:'qhop16c9' ,
  dataset: 'production',
  apiVersion: '2023-03-06',
  useCdn: true,
  token:'skwu7Bu7Je0TmjOBlSd0nrdOq5ugcoEeBBs7vblwemzQPJ42Q73NGxketWQWq5b7WkLgKJ6xTM9y496RbhLGG49SpmSPXSNI2ioZ2fknqfeyHtAPRFPLGVA5dSMcUgg0lMdErYLPMvHsxIbrfitmtWtupsPytEdEuoZtrML0h5OMGvinOOaG',
});

