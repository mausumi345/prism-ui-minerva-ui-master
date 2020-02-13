# minerva-ui


# Welcome to your the UI for Nutanix Files

This application uses webpack and npm. We have two types of builds

To get Started
  1. Make sure you have node.js and npm installed in your dev environment

  2. From the services folder of this app, type "npm install"
     This will install all required npm modules

  3. To start a dev instance, type
     USERNAME=admin PASSWORD=Nutanix.123 PROXY='https://10.5.141.162:9440' npm run dev'
     This will start the UI. API requests will be proxied to 10.5.141.162
     The UI then can be accessed at http://localhost:3000/

  4. To do a production plugin build type "npm run build"
     This will create a production build intended to be plugged into a container
     such as Prism Central or Nutanix Central.
     All artifacts will be in the dist/ folder

__Questions, issues or suggestions? Reach us at https://nutanix.slack.com/messages/xi-canaveral-question/.__

