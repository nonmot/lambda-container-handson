FROM public.ecr.aws/lambda/nodejs:20
COPY app.js package*.json ./
RUN npm install --omit=dev
CMD [ "app.handler" ]
