import { MigrationInterface, QueryRunner } from 'typeorm'

export class Script1702311247028 implements MigrationInterface {
  name = 'Script1702311247028'

  public async up(queryRunner: QueryRunner): Promise<void> {

try {
      await queryRunner.query(
        `
        INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('baa8a877-0428-4cd2-a39c-284e10589672', '1Nyasia15@hotmail.com', 'Alice', 'https://i.imgur.com/YfJQV5z.png?id=3', 'suspended', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('d20ae95d-b6a9-43a5-ae74-81d6e8dadd4e', '13Scot.Windler80@gmail.com', 'Dana', 'https://i.imgur.com/YfJQV5z.png?id=15', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('2006202c-253a-4554-aa2b-865cd17db988', '19Jacinthe.Johnson@gmail.com', 'Dana', 'https://i.imgur.com/YfJQV5z.png?id=21', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('639b129c-8772-48a8-9c4e-79329dde6961', '25Etha_Lehner42@gmail.com', 'Dana', 'https://i.imgur.com/YfJQV5z.png?id=27', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('32a8948f-b52a-47ed-add6-a462da19fecc', '31Tre_Green@yahoo.com', 'Evan', 'https://i.imgur.com/YfJQV5z.png?id=33', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('26edf37f-1ac7-4275-b80b-5b9c2b2f76ea', '37Vicente60@hotmail.com', 'Bob', 'https://i.imgur.com/YfJQV5z.png?id=39', 'deleted', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('5428cafa-9210-4660-98ff-504b05a2973d', '43Lester36@hotmail.com', 'Charlie', 'https://i.imgur.com/YfJQV5z.png?id=45', 'deleted', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('81517489-3446-4b55-83ee-e76eac608033', '49Marcella.Kling23@gmail.com', 'Evan', 'https://i.imgur.com/YfJQV5z.png?id=51', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('89768834-6fdb-4c07-b576-fff87ecad34b', '55Melissa_Orn94@hotmail.com', 'Bob', 'https://i.imgur.com/YfJQV5z.png?id=57', 'pending', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('ff10288a-4649-4b96-a113-977d7f550572', 'New Dataset Available', 'Explore the latest dataset on CO2 emissions now available.', 'EnviroData', '64Regan20@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=65', 'https://i.imgur.com/YfJQV5z.png?id=66', '32a8948f-b52a-47ed-add6-a462da19fecc');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('21a6a8a8-8053-40ff-8294-366dd145f36f', 'CO2 Emission Alert', 'A significant change in CO2 emissions has been detected.', 'Data Insights', '71Alexzander_Nitzsche@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=72', 'https://i.imgur.com/YfJQV5z.png?id=73', '639b129c-8772-48a8-9c4e-79329dde6961');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('501d5908-c84b-4671-8b33-46af7ab87c95', 'New Dataset Available', 'A new dataset has been added to your subscription.', 'EnviroData', '78Harry.Paucek25@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=79', 'https://i.imgur.com/YfJQV5z.png?id=80', '26edf37f-1ac7-4275-b80b-5b9c2b2f76ea');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('010c51c8-d675-4914-a538-b0f22c51e28b', 'Geographical Data Update', 'Warning Emission levels have surpassed safe thresholds in several areas.', 'EnviroData', '85Art.Emmerich76@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=86', 'https://i.imgur.com/YfJQV5z.png?id=87', '32a8948f-b52a-47ed-add6-a462da19fecc');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('3c23c053-44dc-4c27-ab22-ae5f225d0ff4', 'Geographical Data Update', 'The geographical data has been updated for better accuracy.', 'Climate Watch', '92Cole58@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=93', 'https://i.imgur.com/YfJQV5z.png?id=94', 'baa8a877-0428-4cd2-a39c-284e10589672');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('31a8707e-6b5e-4755-bc74-a89034dc7a5a', 'Emission Levels Warning', 'Warning Emission levels have surpassed safe thresholds in several areas.', 'EcoMonitor', '99Katlyn21@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=100', 'https://i.imgur.com/YfJQV5z.png?id=101', '32a8948f-b52a-47ed-add6-a462da19fecc');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('2fc17732-6e80-4faf-8470-9cb04aa864f9', 'Dataset Update Notification', 'Explore the latest dataset on CO2 emissions now available.', 'EcoMonitor', '106Pansy.Marquardt-Huels50@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=107', 'https://i.imgur.com/YfJQV5z.png?id=108', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('157cdac5-07e2-4feb-9343-f9d3a45fd551', 'CO2 Emission Alert', 'A significant change in CO2 emissions has been detected.', 'GeoData Team', '113Triston10@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=114', 'https://i.imgur.com/YfJQV5z.png?id=115', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('6eb0fcd3-d503-4446-b0b9-0a9b99b4578b', 'CO2 Emission Alert', 'Explore the latest dataset on CO2 emissions now available.', 'GeoData Team', '120Imogene3@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=121', 'https://i.imgur.com/YfJQV5z.png?id=122', '81517489-3446-4b55-83ee-e76eac608033');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('fd72d11f-22a0-49d1-98cf-57210ec94002', 'Dataset Update Notification', 'A significant change in CO2 emissions has been detected.', 'EnviroData', '127Phoebe21@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=128', 'https://i.imgur.com/YfJQV5z.png?id=129', '81517489-3446-4b55-83ee-e76eac608033');

INSERT INTO "dataset" ("id", "name", "description", "userId") VALUES ('f5bb7a52-2a06-4294-b450-4444969f15f7', 'Global CO2 Emissions 2020', 'Analysis of CO2 emissions from various modes of transportation.', '2006202c-253a-4554-aa2b-865cd17db988');
INSERT INTO "dataset" ("id", "name", "description", "userId") VALUES ('6dff457f-d739-4d1d-a918-8b660b7000cc', 'Industrial CO2 Output', 'An indepth look at CO2 emissions worldwide in the year 2020.', 'baa8a877-0428-4cd2-a39c-284e10589672');
INSERT INTO "dataset" ("id", "name", "description", "userId") VALUES ('85d7044b-0769-4cbe-89d3-b67fae90bc1a', 'Transportation Emissions Overview', 'An indepth look at CO2 emissions worldwide in the year 2020.', 'd20ae95d-b6a9-43a5-ae74-81d6e8dadd4e');
INSERT INTO "dataset" ("id", "name", "description", "userId") VALUES ('b0e22deb-2bea-4b1a-b8f7-fc098914ce5c', 'Global CO2 Emissions 2020', 'The effect of renewable energy adoption on reducing CO2 emissions.', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "dataset" ("id", "name", "description", "userId") VALUES ('212c00e2-79e6-4594-8e0d-6d3fa0b818a8', 'Urban vs Rural Emissions', 'Data on CO2 emissions from industrial sectors globally.', '89768834-6fdb-4c07-b576-fff87ecad34b');
INSERT INTO "dataset" ("id", "name", "description", "userId") VALUES ('c7f3b55f-eaac-4ab5-bcf6-cd3cb3c81517', 'Industrial CO2 Output', 'Comparative study of emissions from urban versus rural areas.', 'd20ae95d-b6a9-43a5-ae74-81d6e8dadd4e');
INSERT INTO "dataset" ("id", "name", "description", "userId") VALUES ('9a5e1f9a-c3ab-44a1-8f3c-ac13ded8f2db', 'Urban vs Rural Emissions', 'Analysis of CO2 emissions from various modes of transportation.', '89768834-6fdb-4c07-b576-fff87ecad34b');
INSERT INTO "dataset" ("id", "name", "description", "userId") VALUES ('0720a656-7b40-4c14-a22b-ac97852c2fbd', 'Global CO2 Emissions 2020', 'Comparative study of emissions from urban versus rural areas.', '26edf37f-1ac7-4275-b80b-5b9c2b2f76ea');
INSERT INTO "dataset" ("id", "name", "description", "userId") VALUES ('d50bb4e9-c2e2-4a9a-a538-c06f1a68766d', 'Urban vs Rural Emissions', 'Analysis of CO2 emissions from various modes of transportation.', '26edf37f-1ac7-4275-b80b-5b9c2b2f76ea');
INSERT INTO "dataset" ("id", "name", "description", "userId") VALUES ('e1aeb598-9bcc-4a5f-a024-925dc78c16b0', 'Transportation Emissions Overview', 'Data on CO2 emissions from industrial sectors globally.', '639b129c-8772-48a8-9c4e-79329dde6961');

INSERT INTO "area" ("id", "name", "datasetId") VALUES ('3b8547d6-6ff4-47f0-b6a8-297267074cd5', 'Green Valley', '212c00e2-79e6-4594-8e0d-6d3fa0b818a8');
INSERT INTO "area" ("id", "name", "datasetId") VALUES ('8e222320-d480-4b61-91f4-fec257ee8916', 'Industrial City', '9a5e1f9a-c3ab-44a1-8f3c-ac13ded8f2db');
INSERT INTO "area" ("id", "name", "datasetId") VALUES ('13f1a6a8-7025-401c-9fe6-63c5626d10f9', 'Mountain Region', 'b0e22deb-2bea-4b1a-b8f7-fc098914ce5c');
INSERT INTO "area" ("id", "name", "datasetId") VALUES ('40aa69b5-8599-461e-a31a-260fae511595', 'Mountain Region', '6dff457f-d739-4d1d-a918-8b660b7000cc');
INSERT INTO "area" ("id", "name", "datasetId") VALUES ('6a4e98d1-b53f-4367-ab36-52cc70626d01', 'Green Valley', 'f5bb7a52-2a06-4294-b450-4444969f15f7');
INSERT INTO "area" ("id", "name", "datasetId") VALUES ('3b0949ec-dc2a-4cfb-b857-14e8c3f985b3', 'Coastal Area', '6dff457f-d739-4d1d-a918-8b660b7000cc');
INSERT INTO "area" ("id", "name", "datasetId") VALUES ('3483cd4c-e2d2-429f-a504-6a68f8224abd', 'Green Valley', 'c7f3b55f-eaac-4ab5-bcf6-cd3cb3c81517');
INSERT INTO "area" ("id", "name", "datasetId") VALUES ('21fde222-4e09-4e25-80e6-6b5aa7351c2f', 'Green Valley', 'd50bb4e9-c2e2-4a9a-a538-c06f1a68766d');
INSERT INTO "area" ("id", "name", "datasetId") VALUES ('5b58d6e2-93c7-45aa-9ab3-df8c369aa6bc', 'Coastal Area', '6dff457f-d739-4d1d-a918-8b660b7000cc');
INSERT INTO "area" ("id", "name", "datasetId") VALUES ('fa5794f3-6d9e-4901-9509-aaace35f0f10', 'Mountain Region', 'f5bb7a52-2a06-4294-b450-4444969f15f7');

INSERT INTO "emission" ("id", "co2Amount", "year", "areaId") VALUES ('04e60f98-10d3-439f-9a96-d88bbedf8ea7', 404, 378, '6a4e98d1-b53f-4367-ab36-52cc70626d01');
INSERT INTO "emission" ("id", "co2Amount", "year", "areaId") VALUES ('6de7aba9-965c-4bf3-a1eb-9cf74f09f4e1', 870, 917, '13f1a6a8-7025-401c-9fe6-63c5626d10f9');
INSERT INTO "emission" ("id", "co2Amount", "year", "areaId") VALUES ('501eda37-6821-45fd-95ca-edbf690c7712', 279, 889, '6a4e98d1-b53f-4367-ab36-52cc70626d01');
INSERT INTO "emission" ("id", "co2Amount", "year", "areaId") VALUES ('fa49f3f5-3dd9-4619-9307-e3738d4b674a', 731, 380, '6a4e98d1-b53f-4367-ab36-52cc70626d01');
INSERT INTO "emission" ("id", "co2Amount", "year", "areaId") VALUES ('f935f5f4-2161-4991-b17d-7ae52c91834f', 956, 703, 'fa5794f3-6d9e-4901-9509-aaace35f0f10');
INSERT INTO "emission" ("id", "co2Amount", "year", "areaId") VALUES ('f970b2f0-16bd-4cb8-8122-f8cc3d1225d3', 137, 815, '3b0949ec-dc2a-4cfb-b857-14e8c3f985b3');
INSERT INTO "emission" ("id", "co2Amount", "year", "areaId") VALUES ('0a8fc095-2cd8-46db-a8d7-902f7c8b5fa1', 932, 503, '5b58d6e2-93c7-45aa-9ab3-df8c369aa6bc');
INSERT INTO "emission" ("id", "co2Amount", "year", "areaId") VALUES ('d0906042-0d58-4943-993d-7a544a10f6b5', 917, 607, '5b58d6e2-93c7-45aa-9ab3-df8c369aa6bc');
INSERT INTO "emission" ("id", "co2Amount", "year", "areaId") VALUES ('0c639e79-6a73-4251-859a-0025c436d075', 681, 529, 'fa5794f3-6d9e-4901-9509-aaace35f0f10');
INSERT INTO "emission" ("id", "co2Amount", "year", "areaId") VALUES ('43e9a993-cb2c-4dbb-8545-7b7978acbb48', 893, 224, '21fde222-4e09-4e25-80e6-6b5aa7351c2f');
    `,
      )
    } catch (error) {
      // ignore
    }

}

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
