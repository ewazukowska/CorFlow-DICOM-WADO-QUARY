FROM node:alpine

WORKDIR /CorFlow-DICOM-WADO-QUARY/CorFlow-Frontend

COPY . /CorFlow-DICOM-WADO-QUARY/CorFlow-Frontend

RUN npm install -g @angular/cli
RUN npm install

CMD ["ng", "serve", "--host", "0.0.0.0"]