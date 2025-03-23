## Work History

### Data Engineering (2016 - Present)

#### Apple | Speech Recognition <span class="timeline">Oct 2023 to Present</span>

- **Iceberg Migration**
Led an organization-wide effort to migrate 20,000+ datasets from parquet to Iceberg. Built tools, documented process, educated peers, and of course, migrated many datasets. Helped set requirements for tool owners to adopt Iceberg.

- **Transcription Support API**
Building a new API to improve the data annotation process by providing phonetic search of the contextual information associated with a request. Phonetic search improves annotation speed and effectiveness in finding the correct entity in the transcription.

- **Speech Catalog**
Designed, built, and maintain a custom Dataset Catalog to manage, discover, and inspect Speech Recognition datasets. Speech Recognition has tens of thousands of datasets for training and evaluation of models. Speech Catalog is enhanced with domain knowledge to help solve challenges managers, engineers, and modelers face on a day-to-day basis. Built in Python and Javascript, leveraging Trino, Iceberg, and Spark for data access, deploying in Kubernetes with helmfile, and storage in PostgreSQL on AWS RDS.

#### Apple | AIML Instrumentation Platform <span class="timeline">Dec 2019 to Oct 2023</span>

- **AIMLInstrumentationStreams**
Designed and built an on-device library for inspecting the data that was originally designed to be shipped off-device for later analysis. The library joins together the 1000+ small messages that make up a single Siri request using graph traversal of interconnected components, allowing the caller to easily retrieve information that original came from disparate systems. Now used to enable differential privacy of users by running analyses on-device. Built in Swift and Objective-C.

- **Antero**
Designed, built, and maintained a data-in-development inspection and verification tool. Originally built to help understand how the data described a Siri user interaction, it became a vital part of shipping Siri On-Device, accelerating the work of making Siri more efficient and finding issues with data joinability and correctness. Built in Clojure and Javascript, running Flink ETL, deploying in Kubernetes with helmfile, and storage in ElasticSearch.

#### Activision | Central Tech <span class="timeline">Mar 2016 to Dec 2019</span>


- **CWL eSports Analysis**
Developed and evangelized an eSports data ingestion and aggregation system used in broadcast graphics and data analysis for Call of Duty World League from 2016 - 2019. Leveraged the platform to do advanced sabremetrics research (i.e. develop a win probability model). Built in Node.js and React/Redux with storage in Postgres.

- **Play of the Game Simulation**
In order to understand potential changes to Black Ops 4's Play of the Game feature, I built a simulation that matched the game code. We ran the simulation with altered weights on real game data to understand the outcomes of weighting changes before launching to real users. Built in Spark Scala leveraging a Data Lake.

- **Operations Systems**
Led a team of 3 engineers providing operations for databases and CI tooling. Provided a development, CI/CD, and deployment platform for larger team. Also deployed and supported ElasticSearch and Kafka. Built on Kafka, Kubernetes, helm, and many more tools.

### Web and Distributed Systems (2012 - 2015)

#### Rafflecopter <span class="timeline">Sep 2013 to Oct 2015</span>


- **Entry Processing System**
Architected and developed system for processing entries with composable and testable middleware, asynchronous queues, and microservices. Built in Node.js and Clojure with storage in MongoDB.

- **New Widget**
Redesigned and developed the [Rafflecopter Widget](https://reafflecopter.com/tour) (a Javascript embeddable entry form for giveaways on other sites). Built in Javascript and Clojurescript with Reagent.

- **DevOps Orchestration System**
Built out deployment infrastructure and tooling twice during my tenure. First built in SaltStack. Then rebuilt on early Kubernetes.

#### Under Armour | eCommerce <span class="timeline">July 2012 to Sep 2013</span>


- **Recommendations Engine**
Developed batch-based recommendations engine to replace Omniture on [ua.com](http://ua.com). Built in python on now-defunct MapReduce framework named [Disco](https://github.com/discoproject/disco).

- **Rendering Improvements**
At the time, UA used a recursive JSON markup language for site definition with a custom CMS and renderer written in ColdFusion. I made a ton of improvements to page load speed by automating optimizations in the recursive JSON, rewriting some of the renderer, and moving dynamic frontend code into static HTML. Done with ColdFusion, JSON, and Javascript.

- **CI/CD System**
Built the deployment and CI system for ua.com with IRC Chat-Ops and full Continuous Delivery. Built in Ruby with Capistrano and Python.

### Algorithms and High Performance Computing (2009 - 2012)

#### Northrop Grumman | Electronic Systems <span class="timeline">May 2009 to July 2012</span>


- **Jupiter RADAR System**
I was a key developer and debugger for multiple components of this modular RADAR system, running on an embedded high performance system. I helped improve system architecture (in UML), intercomponent communication, and even CI tooling (on ClearCase!). Eventually, I was brought in to debug the SAR (Synthetic Aperture RADAR) algorithm and bring it to program completion.

- **SONAR Algorithm Research**
Researched High Speed SAS (Synthetic Aperture SONAR), a tradeoff of speed vs resolution. Developed mitigation strategies to achieve consistent resolution in center of image. Developed theory, models, simulation, and adapted into high performance code.
