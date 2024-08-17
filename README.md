# CorFlow-DICOM-WADO-QUARY

## Overview

Project is designed to simplify access, processing, and management of medical images in DICOM format. By utilizing the WADO-RS standard for accessing DICOM images and incorporating a user-friendly GUI, the project aims to streamline both data management and user interaction, ultimately enhancing efficiency and usability in medical imaging workflows.
## Features
- Implementation of the WADO-RS API for retrieving, transmitting, and processing medical images in DICOM format.
- GUI allowing convenient use of API functions, including browsing available images, downloading selected images, filtering images based on various criteria, creating database queries, etc.
- Data transfer from JSON format to a database for better management of medical data.

## Installation
1. Clone this repository to your local computer.
2. Install the required frontend dependencies by running `npm install`.
3. Set the database configuration parameters in the `appsettings.json` file.
4. Start the application backend container with `docker compose`.

## Authors
- [Ewa Żukowska](ezukowska@student.agh.edu.pl)
- [Adam Staniszewski](adamstan@student.agh.edu.pl)
## License
This project is licensed under the MIT License. For more information, see the LICENSE file.
