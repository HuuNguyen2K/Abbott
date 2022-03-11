module.exports = function (shipit) {
  // Load shipit-deploy tasks
  require("shipit-deploy")(shipit);

  shipit.initConfig({
    "solution-abbott-development": {
      servers: ["binami@54.251.217.230"],
      deployUser: 'binami',
      deployTo: "/home/bitnami/htdocs/solution-abbott-event",
      key: "doc/aws/gms-abbott-production.pem",
    }
  });

  shipit.task("js:deploy", async () => {
    // Zip the dist folder into dist.zip package then remove the folder as we don't need it anymore
    await shipit.local("zip -r dist.zip .");

    // Create deployTo folder if it's not existed
    await shipit.remote(
      `sudo mkdir -p ${shipit.config.deployTo} && sudo chown -R ${shipit.config.deployUser}: ${shipit.config.deployTo}`
    );

    // // Copy dist.zip to servers
    await shipit.copyToRemote("dist.zip", shipit.config.deployTo);

    // // Remove the dist.zip
    await shipit.local("rm dist.zip");

    // // remove old frontend files
    await shipit.remote(`rm -rf ${shipit.config.deployTo}/*`);

    // // On server, unzip the dist.zip file then remove the zip package
    await shipit.remote(
      `cd ${shipit.config.deployTo} && unzip -o dist.zip && rm dist.zip`
    );
  });
};
