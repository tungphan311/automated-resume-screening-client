import { Link } from "react-router-dom";
import IconInput from "components/Input/IconInput";
import React, { useEffect, useState } from "react";
import { Field, reduxForm } from "redux-form";
import { FORM_KEY_JOB_SEARCH } from "state/reducers/formReducer";
import { SearchOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import SelectWithSearch from "components/SelectWithSearch/SelectWithSearch";
import qs from "query-string";


import { connect, useDispatch, useSelector } from "react-redux";
import { GET_JOB_DOMAIN } from "state/reducers/jobDomainReducer";

import "./Explore.scss";

function Explore({ handleSubmit }) {
  const [state, setState] = useState({
    loading: false,
    fetch: false,
    jobDomains: []
  });
  
const array = [
  {
    id: 7806,
    name: "2d artist"
  },
  {
    id: 7807,
    name: "2d characters"
  },
  {
    id: 7808,
    name: "2d textures"
  },
  {
    id: 7809,
    name: "3 layers"
  },
  {
    id: 7810,
    name: "3d characters"
  },
  {
    id: 7811,
    name: "3d environmental objects"
  },
  {
    id: 7812,
    name: "3d hard surface modeling"
  },
  {
    id: 7813,
    name: "3g"
  },
  {
    id: 7814,
    name: "8base"
  },
  {
    id: 7815,
    name: "k-nearest neighbour"
  },
  {
    id: 7816,
    name: ".net"
  },
  {
    id: 7817,
    name: "a-frame"
  },
  {
    id: 7818,
    name: "ab tasty"
  },
  {
    id: 7819,
    name: "ably"
  },
  {
    id: 7820,
    name: "absence of error fallacy"
  },
  {
    id: 7821,
    name: "abstract"
  },
  {
    id: 7822,
    name: "abstracting and indexing"
  },
  {
    id: 7823,
    name: "acceptance criteria"
  },
  {
    id: 7824,
    name: "acceptance testing"
  },
  {
    id: 7825,
    name: "accessiblility"
  },
  {
    id: 7826,
    name: "account management"
  },
  {
    id: 7827,
    name: "accounting"
  },
  {
    id: 7828,
    name: "acid"
  },
  {
    id: 7829,
    name: "ackee analytics"
  },
  {
    id: 7830,
    name: "action selection"
  },
  {
    id: 7831,
    name: "action spaces"
  },
  {
    id: 7832,
    name: "activation functions"
  },
  {
    id: 7833,
    name: "active listening"
  },
  {
    id: 7834,
    name: "activity"
  },
  {
    id: 7835,
    name: "activity lifecycle"
  },
  {
    id: 7836,
    name: "activity recognition"
  },
  {
    id: 7837,
    name: "actix"
  },
  {
    id: 7838,
    name: "actor critic"
  },
  {
    id: 7839,
    name: "adadelta"
  },
  {
    id: 7840,
    name: "adagrad"
  },
  {
    id: 7841,
    name: "adam"
  },
  {
    id: 7842,
    name: "adaptability"
  },
  {
    id: 7843,
    name: "adaptative icons"
  },
  {
    id: 7844,
    name: "adapter view"
  },
  {
    id: 7845,
    name: "adaptive boosting"
  },
  {
    id: 7846,
    name: "adobe"
  },
  {
    id: 7847,
    name: "adobe acrobat"
  },
  {
    id: 7848,
    name: "adobe analytics"
  },
  {
    id: 7849,
    name: "adobe creative cloud"
  },
  {
    id: 7850,
    name: "adobe photoshop"
  },
  {
    id: 7851,
    name: "advanced java"
  },
  {
    id: 7852,
    name: "adventure game studio"
  },
  {
    id: 7853,
    name: "adversarial training"
  },
  {
    id: 7854,
    name: "advertisement"
  },
  {
    id: 7855,
    name: "advertising"
  },
  {
    id: 7856,
    name: "agglomerative"
  },
  {
    id: 7857,
    name: "agile"
  },
  {
    id: 7858,
    name: "agile project management"
  },
  {
    id: 7859,
    name: "ai"
  },
  {
    id: 7860,
    name: "air cargo business"
  },
  {
    id: 7861,
    name: "airbrake"
  },
  {
    id: 7862,
    name: "airline mode"
  },
  {
    id: 7863,
    name: "airport cargo operation"
  },
  {
    id: 7864,
    name: "ajax"
  },
  {
    id: 7865,
    name: "alation"
  },
  {
    id: 7866,
    name: "algorithmic trading"
  },
  {
    id: 7867,
    name: "algorithms"
  },
  {
    id: 7868,
    name: "all nighter tour"
  },
  {
    id: 7869,
    name: "allocations"
  },
  {
    id: 7870,
    name: "alpha and beta testing"
  },
  {
    id: 7871,
    name: "amazon ab testing"
  },
  {
    id: 7872,
    name: "amazon api gateway"
  },
  {
    id: 7873,
    name: "amazon athena"
  },
  {
    id: 7874,
    name: "amazon aurora"
  },
  {
    id: 7875,
    name: "amazon cloudwatch"
  },
  {
    id: 7876,
    name: "amazon dynamodb"
  },
  {
    id: 7877,
    name: "amazon ebs"
  },
  {
    id: 7878,
    name: "amazon ec2"
  },
  {
    id: 7879,
    name: "amazon elasticache"
  },
  {
    id: 7880,
    name: "amazon emr"
  },
  {
    id: 7881,
    name: "amazon fire"
  },
  {
    id: 7882,
    name: "amazon lightsail"
  },
  {
    id: 7883,
    name: "amazon lumberyard"
  },
  {
    id: 7884,
    name: "amazon quicksight"
  },
  {
    id: 7885,
    name: "amazon rds"
  },
  {
    id: 7886,
    name: "amazon redshift"
  },
  {
    id: 7887,
    name: "amazon s3"
  },
  {
    id: 7888,
    name: "amazon sqs"
  },
  {
    id: 7889,
    name: "amazon vpc"
  },
  {
    id: 7890,
    name: "amazon-mobile-analytics"
  },
  {
    id: 7891,
    name: "amp"
  },
  {
    id: 7892,
    name: "amplitude"
  },
  {
    id: 7893,
    name: "analysis"
  },
  {
    id: 7894,
    name: "analysis and design"
  },
  {
    id: 7895,
    name: "analyst ii"
  },
  {
    id: 7896,
    name: "analyst relations"
  },
  {
    id: 7897,
    name: "analytical"
  },
  {
    id: 7898,
    name: "analytical skills"
  },
  {
    id: 7899,
    name: "analytics"
  },
  {
    id: 7900,
    name: "ananas analytics"
  },
  {
    id: 7901,
    name: "android"
  },
  {
    id: 7902,
    name: "android debug bridge"
  },
  {
    id: 7903,
    name: "android jetpack"
  },
  {
    id: 7904,
    name: "android lint"
  },
  {
    id: 7905,
    name: "android sdk"
  },
  {
    id: 7906,
    name: "android studio"
  },
  {
    id: 7907,
    name: "android test"
  },
  {
    id: 7908,
    name: "android tv"
  },
  {
    id: 7909,
    name: "angular"
  },
  {
    id: 7910,
    name: "angularjs"
  },
  {
    id: 7911,
    name: "animation"
  },
  {
    id: 7912,
    name: "animation drawables"
  },
  {
    id: 7913,
    name: "animator"
  },
  {
    id: 7914,
    name: "ansible"
  },
  {
    id: 7915,
    name: "answer extraction"
  },
  {
    id: 7916,
    name: "ant design"
  },
  {
    id: 7917,
    name: "anticipation"
  },
  {
    id: 7918,
    name: "apache"
  },
  {
    id: 7919,
    name: "apache camel"
  },
  {
    id: 7920,
    name: "apache httpd"
  },
  {
    id: 7921,
    name: "api"
  },
  {
    id: 7922,
    name: "api testing"
  },
  {
    id: 7923,
    name: "apollo"
  },
  {
    id: 7924,
    name: "app actions"
  },
  {
    id: 7925,
    name: "app apk"
  },
  {
    id: 7926,
    name: "app bar"
  },
  {
    id: 7927,
    name: "app billing"
  },
  {
    id: 7928,
    name: "app bundle"
  },
  {
    id: 7929,
    name: "app components"
  },
  {
    id: 7930,
    name: "app indexing"
  },
  {
    id: 7931,
    name: "app links"
  },
  {
    id: 7932,
    name: "app manifest"
  },
  {
    id: 7933,
    name: "app publishing"
  },
  {
    id: 7934,
    name: "app startup"
  },
  {
    id: 7935,
    name: "app store"
  },
  {
    id: 7936,
    name: "appannie"
  },
  {
    id: 7937,
    name: "appdynamics"
  },
  {
    id: 7938,
    name: "appeal"
  },
  {
    id: 7939,
    name: "appearance model"
  },
  {
    id: 7940,
    name: "appfog"
  },
  {
    id: 7941,
    name: "appfollowio"
  },
  {
    id: 7942,
    name: "appharbor"
  },
  {
    id: 7943,
    name: "apphub"
  },
  {
    id: 7944,
    name: "appium"
  },
  {
    id: 7945,
    name: "application development"
  },
  {
    id: 7946,
    name: "application monitoring"
  },
  {
    id: 7947,
    name: "application programming"
  },
  {
    id: 7948,
    name: "approximate inference"
  },
  {
    id: 7949,
    name: "appsee"
  },
  {
    id: 7950,
    name: "appsignal"
  },
  {
    id: 7951,
    name: "appsmith"
  },
  {
    id: 7952,
    name: "appthwack"
  },
  {
    id: 7953,
    name: "apptim"
  },
  {
    id: 7954,
    name: "appveyor"
  },
  {
    id: 7955,
    name: "apriori algorithm"
  },
  {
    id: 7956,
    name: "aqua"
  },
  {
    id: 7957,
    name: "ar"
  },
  {
    id: 7958,
    name: "arangodb"
  },
  {
    id: 7959,
    name: "arc"
  },
  {
    id: 7960,
    name: "architects"
  },
  {
    id: 7961,
    name: "architectural design"
  },
  {
    id: 7962,
    name: "architecture"
  },
  {
    id: 7963,
    name: "architecture components"
  },
  {
    id: 7964,
    name: "arcs"
  },
  {
    id: 7965,
    name: "aritficial intelligence"
  },
  {
    id: 7966,
    name: "array"
  },
  {
    id: 7967,
    name: "asp .net"
  },
  {
    id: 7968,
    name: "aspose"
  },
  {
    id: 7969,
    name: "assembly"
  },
  {
    id: 7970,
    name: "assocaition rule learning"
  },
  {
    id: 7971,
    name: "associate producer"
  },
  {
    id: 7972,
    name: "associative classifiters"
  },
  {
    id: 7973,
    name: "astronomer"
  },
  {
    id: 7974,
    name: "async task"
  },
  {
    id: 7975,
    name: "atscale"
  },
  {
    id: 7976,
    name: "attention"
  },
  {
    id: 7977,
    name: "audio"
  },
  {
    id: 7978,
    name: "audio-visual"
  },
  {
    id: 7979,
    name: "auth0"
  },
  {
    id: 7980,
    name: "authentication"
  },
  {
    id: 7981,
    name: "auto it"
  },
  {
    id: 7982,
    name: "autodesk 3dsmax"
  },
  {
    id: 7983,
    name: "autodesk maya"
  },
  {
    id: 7984,
    name: "autoencoder"
  },
  {
    id: 7985,
    name: "autolayout"
  },
  {
    id: 7986,
    name: "automatic evaluation"
  },
  {
    id: 7987,
    name: "automatic translation"
  },
  {
    id: 7988,
    name: "automation"
  },
  {
    id: 7989,
    name: "automation test"
  },
  {
    id: 7990,
    name: "autotrack"
  },
  {
    id: 7991,
    name: "ava"
  },
  {
    id: 7992,
    name: "availability"
  },
  {
    id: 7993,
    name: "average reward"
  },
  {
    id: 7994,
    name: "avl tree"
  },
  {
    id: 7995,
    name: "awesome deep learning"
  },
  {
    id: 7996,
    name: "aws"
  },
  {
    id: 7997,
    name: "aws appsync"
  },
  {
    id: 7998,
    name: "aws batch"
  },
  {
    id: 7999,
    name: "aws beanstalk"
  },
  {
    id: 8000,
    name: "aws cloudformation"
  },
  {
    id: 8001,
    name: "aws cloudtrail"
  },
  {
    id: 8002,
    name: "aws codebuild"
  },
  {
    id: 8003,
    name: "aws codecommit"
  },
  {
    id: 8004,
    name: "aws codedeploy"
  },
  {
    id: 8005,
    name: "aws codepipeline"
  },
  {
    id: 8006,
    name: "aws codestar"
  },
  {
    id: 8007,
    name: "aws elastic beanstalk"
  },
  {
    id: 8008,
    name: "aws firecracker"
  },
  {
    id: 8009,
    name: "aws glue"
  },
  {
    id: 8010,
    name: "aws iam"
  },
  {
    id: 8011,
    name: "aws lambda"
  },
  {
    id: 8012,
    name: "aws mobile hub"
  },
  {
    id: 8013,
    name: "aws outposts"
  },
  {
    id: 8014,
    name: "axure"
  },
  {
    id: 8015,
    name: "azure"
  },
  {
    id: 8016,
    name: "azure application insights"
  },
  {
    id: 8017,
    name: "azure cosmos db"
  },
  {
    id: 8018,
    name: "azure data factory"
  },
  {
    id: 8019,
    name: "azure databricks"
  },
  {
    id: 8020,
    name: "azure devops"
  },
  {
    id: 8021,
    name: "azure monitor"
  },
  {
    id: 8022,
    name: "azure pipelines"
  },
  {
    id: 8023,
    name: "azure service bus"
  },
  {
    id: 8024,
    name: "azure sql database"
  },
  {
    id: 8025,
    name: "azure stack"
  },
  {
    id: 8026,
    name: "azure storage"
  },
  {
    id: 8027,
    name: "azure synapse"
  },
  {
    id: 8028,
    name: "ba"
  },
  {
    id: 8029,
    name: "ba consultant"
  },
  {
    id: 8030,
    name: "baas"
  },
  {
    id: 8031,
    name: "babel"
  },
  {
    id: 8032,
    name: "babylonjs"
  },
  {
    id: 8033,
    name: "back4app"
  },
  {
    id: 8034,
    name: "back alley tour"
  },
  {
    id: 8035,
    name: "back end"
  },
  {
    id: 8036,
    name: "backand"
  },
  {
    id: 8037,
    name: "backbone"
  },
  {
    id: 8038,
    name: "background"
  },
  {
    id: 8039,
    name: "backlogs"
  },
  {
    id: 8040,
    name: "backpropagation algorithm"
  },
  {
    id: 8041,
    name: "backstack"
  },
  {
    id: 8042,
    name: "bacs"
  },
  {
    id: 8043,
    name: "bagging"
  },
  {
    id: 8044,
    name: "bamboo"
  },
  {
    id: 8045,
    name: "bank"
  },
  {
    id: 8046,
    name: "banking"
  },
  {
    id: 8047,
    name: "bash scripting"
  },
  {
    id: 8048,
    name: "batch normalization"
  },
  {
    id: 8049,
    name: "batch size effects"
  },
  {
    id: 8050,
    name: "bayes"
  },
  {
    id: 8051,
    name: "bayes classifier"
  },
  {
    id: 8052,
    name: "bayesian"
  },
  {
    id: 8053,
    name: "bayesian classifier"
  },
  {
    id: 8054,
    name: "bayesian estimation"
  },
  {
    id: 8055,
    name: "bayesian filtering"
  },
  {
    id: 8056,
    name: "bayesian frameworks"
  },
  {
    id: 8057,
    name: "bayesian inference"
  },
  {
    id: 8058,
    name: "bayesian networks"
  },
  {
    id: 8059,
    name: "bazel"
  },
  {
    id: 8060,
    name: "bba"
  },
  {
    id: 8061,
    name: "bcrypt"
  },
  {
    id: 8062,
    name: "bdd"
  },
  {
    id: 8063,
    name: "bde"
  },
  {
    id: 8064,
    name: "bdm"
  },
  {
    id: 8065,
    name: "behat"
  },
  {
    id: 8066,
    name: "behave"
  },
  {
    id: 8067,
    name: "bem"
  },
  {
    id: 8068,
    name: "beta"
  },
  {
    id: 8069,
    name: "bi"
  },
  {
    id: 8070,
    name: "bias"
  },
  {
    id: 8071,
    name: "bidding"
  },
  {
    id: 8072,
    name: "big data"
  },
  {
    id: 8073,
    name: "bigcommerce"
  },
  {
    id: 8074,
    name: "bilingual dictionary"
  },
  {
    id: 8075,
    name: "bilstm"
  },
  {
    id: 8076,
    name: "binary decision tree"
  },
  {
    id: 8077,
    name: "binary pattern"
  },
  {
    id: 8078,
    name: "binary search"
  },
  {
    id: 8079,
    name: "binary tree"
  },
  {
    id: 8080,
    name: "binning sparse values"
  },
  {
    id: 8081,
    name: "binomial"
  },
  {
    id: 8082,
    name: "bipp analytics"
  },
  {
    id: 8083,
    name: "birst"
  },
  {
    id: 8084,
    name: "bitbucket"
  },
  {
    id: 8085,
    name: "bitbucket pipeline"
  },
  {
    id: 8086,
    name: "bitmap"
  },
  {
    id: 8087,
    name: "bitrise"
  },
  {
    id: 8088,
    name: "black box"
  },
  {
    id: 8089,
    name: "blackberry"
  },
  {
    id: 8090,
    name: "blackbox testing"
  },
  {
    id: 8091,
    name: "blackfire"
  },
  {
    id: 8092,
    name: "blazor"
  },
  {
    id: 8093,
    name: "blocks"
  },
  {
    id: 8094,
    name: "bluetooth"
  },
  {
    id: 8095,
    name: "bokeh"
  },
  {
    id: 8096,
    name: "boosting"
  },
  {
    id: 8097,
    name: "boot2docker"
  },
  {
    id: 8098,
    name: "bootstrap"
  },
  {
    id: 8099,
    name: "bottom up"
  },
  {
    id: 8100,
    name: "boundar value analysis"
  },
  {
    id: 8101,
    name: "bower"
  },
  {
    id: 8102,
    name: "branch metrics"
  },
  {
    id: 8103,
    name: "branding"
  },
  {
    id: 8104,
    name: "brd"
  },
  {
    id: 8105,
    name: "breadth first search"
  },
  {
    id: 8106,
    name: "break-pointer"
  },
  {
    id: 8107,
    name: "breakdown maintenance"
  },
  {
    id: 8108,
    name: "broadcast receiver"
  },
  {
    id: 8109,
    name: "browserify"
  },
  {
    id: 8110,
    name: "browserstack"
  },
  {
    id: 8111,
    name: "bubble sort"
  },
  {
    id: 8112,
    name: "bubbles"
  },
  {
    id: 8113,
    name: "buble sort"
  },
  {
    id: 8114,
    name: "bucket sort"
  },
  {
    id: 8115,
    name: "budget management"
  },
  {
    id: 8116,
    name: "bugsnag"
  },
  {
    id: 8117,
    name: "build"
  },
  {
    id: 8118,
    name: "build config"
  },
  {
    id: 8119,
    name: "build configuration"
  },
  {
    id: 8120,
    name: "build flavors"
  },
  {
    id: 8121,
    name: "build types"
  },
  {
    id: 8122,
    name: "buildbot"
  },
  {
    id: 8123,
    name: "buildkite"
  },
  {
    id: 8124,
    name: "bulma"
  },
  {
    id: 8125,
    name: "business"
  },
  {
    id: 8126,
    name: "business administration"
  },
  {
    id: 8127,
    name: "business analyst"
  },
  {
    id: 8128,
    name: "business analyst consultant"
  },
  {
    id: 8129,
    name: "business analytics"
  },
  {
    id: 8130,
    name: "business case"
  },
  {
    id: 8131,
    name: "business consultant"
  },
  {
    id: 8132,
    name: "business consulting"
  },
  {
    id: 8133,
    name: "business development"
  },
  {
    id: 8134,
    name: "business development manager"
  },
  {
    id: 8135,
    name: "business documentation"
  },
  {
    id: 8136,
    name: "business executive"
  },
  {
    id: 8137,
    name: "business functional consultant"
  },
  {
    id: 8138,
    name: "business intelligence"
  },
  {
    id: 8139,
    name: "business operations"
  },
  {
    id: 8140,
    name: "business planning"
  },
  {
    id: 8141,
    name: "business process"
  },
  {
    id: 8142,
    name: "business requirement analysis"
  },
  {
    id: 8143,
    name: "business research"
  },
  {
    id: 8144,
    name: "business skill"
  },
  {
    id: 8145,
    name: "business strategy"
  },
  {
    id: 8146,
    name: "bva"
  },
  {
    id: 8147,
    name: "c"
  },
  {
    id: 8148,
    name: "c4"
  },
  {
    id: 8149,
    name: "c4.5 algorithm"
  },
  {
    id: 8150,
    name: "c sharp"
  },
  {
    id: 8151,
    name: "c++"
  },
  {
    id: 8152,
    name: "cache"
  },
  {
    id: 8153,
    name: "caching server"
  },
  {
    id: 8154,
    name: "caddy"
  },
  {
    id: 8155,
    name: "cakephp"
  },
  {
    id: 8156,
    name: "calabash"
  },
  {
    id: 8157,
    name: "calendar provider"
  },
  {
    id: 8158,
    name: "calling another api"
  },
  {
    id: 8159,
    name: "calypso"
  },
  {
    id: 8160,
    name: "camera"
  },
  {
    id: 8161,
    name: "camerax"
  },
  {
    id: 8162,
    name: "cap theorem"
  },
  {
    id: 8163,
    name: "capistrano"
  },
  {
    id: 8164,
    name: "capital market"
  },
  {
    id: 8165,
    name: "caprover"
  },
  {
    id: 8166,
    name: "carthage"
  },
  {
    id: 8167,
    name: "cassandra"
  },
  {
    id: 8168,
    name: "centos"
  },
  {
    id: 8169,
    name: "central limit theorem"
  },
  {
    id: 8170,
    name: "centralize"
  },
  {
    id: 8171,
    name: "cf engine"
  },
  {
    id: 8172,
    name: "chai"
  },
  {
    id: 8173,
    name: "chakra ui"
  },
  {
    id: 8174,
    name: "change coach"
  },
  {
    id: 8175,
    name: "change management"
  },
  {
    id: 8176,
    name: "change the model"
  },
  {
    id: 8177,
    name: "character design"
  },
  {
    id: 8178,
    name: "character recognition"
  },
  {
    id: 8179,
    name: "character rigging"
  },
  {
    id: 8180,
    name: "chartbeat"
  },
  {
    id: 8181,
    name: "chartio"
  },
  {
    id: 8182,
    name: "checkaso"
  },
  {
    id: 8183,
    name: "checklist"
  },
  {
    id: 8184,
    name: "chef"
  },
  {
    id: 8185,
    name: "ci"
  },
  {
    id: 8186,
    name: "ci cd"
  },
  {
    id: 8187,
    name: "ci/cd"
  },
  {
    id: 8188,
    name: "ci/cd tools"
  },
  {
    id: 8189,
    name: "cincopa"
  },
  {
    id: 8190,
    name: "circle ci"
  },
  {
    id: 8191,
    name: "circle list"
  },
  {
    id: 8192,
    name: "circleci"
  },
  {
    id: 8193,
    name: "claims tour"
  },
  {
    id: 8194,
    name: "class information"
  },
  {
    id: 8195,
    name: "classification"
  },
  {
    id: 8196,
    name: "classification rate"
  },
  {
    id: 8197,
    name: "clean architecture"
  },
  {
    id: 8198,
    name: "cleardb"
  },
  {
    id: 8199,
    name: "clever cloud"
  },
  {
    id: 8200,
    name: "clevertap"
  },
  {
    id: 8201,
    name: "cli"
  },
  {
    id: 8202,
    name: "clickable components"
  },
  {
    id: 8203,
    name: "clicktale"
  },
  {
    id: 8204,
    name: "clickteam fusion"
  },
  {
    id: 8205,
    name: "clicky"
  },
  {
    id: 8206,
    name: "client"
  },
  {
    id: 8207,
    name: "client communication"
  },
  {
    id: 8208,
    name: "client coordination"
  },
  {
    id: 8209,
    name: "client handling"
  },
  {
    id: 8210,
    name: "client libraries"
  },
  {
    id: 8211,
    name: "client management"
  },
  {
    id: 8212,
    name: "client servicing"
  },
  {
    id: 8213,
    name: "closure activities"
  },
  {
    id: 8214,
    name: "cloud"
  },
  {
    id: 8215,
    name: "cloud computing"
  },
  {
    id: 8216,
    name: "cloud foundry"
  },
  {
    id: 8217,
    name: "cloud messaging"
  },
  {
    id: 8218,
    name: "cloudbees"
  },
  {
    id: 8219,
    name: "cloudformation"
  },
  {
    id: 8220,
    name: "cloudify"
  },
  {
    id: 8221,
    name: "cloudwatch"
  },
  {
    id: 8222,
    name: "clustering"
  },
  {
    id: 8223,
    name: "cluvio"
  },
  {
    id: 8224,
    name: "cnn"
  },
  {
    id: 8225,
    name: "cockroachdb"
  },
  {
    id: 8226,
    name: "cocoa touch"
  },
  {
    id: 8227,
    name: "cocoapods"
  },
  {
    id: 8228,
    name: "cocos2d"
  },
  {
    id: 8229,
    name: "codable"
  },
  {
    id: 8230,
    name: "code"
  },
  {
    id: 8231,
    name: "code coverage"
  },
  {
    id: 8232,
    name: "code refactoring"
  },
  {
    id: 8233,
    name: "code review"
  },
  {
    id: 8234,
    name: "codebeat"
  },
  {
    id: 8235,
    name: "codeception"
  },
  {
    id: 8236,
    name: "codeceptjs"
  },
  {
    id: 8237,
    name: "codefresh"
  },
  {
    id: 8238,
    name: "codeigniter"
  },
  {
    id: 8239,
    name: "codekit"
  },
  {
    id: 8240,
    name: "codepush"
  },
  {
    id: 8241,
    name: "codeship"
  },
  {
    id: 8242,
    name: "coffeescript"
  },
  {
    id: 8243,
    name: "coldelgniter"
  },
  {
    id: 8244,
    name: "collaboration"
  },
  {
    id: 8245,
    name: "color images"
  },
  {
    id: 8246,
    name: "colums"
  },
  {
    id: 8247,
    name: "commercial lending"
  },
  {
    id: 8248,
    name: "communication"
  },
  {
    id: 8249,
    name: "communication skills"
  },
  {
    id: 8250,
    name: "compatibility testing"
  },
  {
    id: 8251,
    name: "competitive intelligence"
  },
  {
    id: 8252,
    name: "complete"
  },
  {
    id: 8253,
    name: "complexity tour"
  },
  {
    id: 8254,
    name: "compliance management"
  },
  {
    id: 8255,
    name: "compliance testing"
  },
  {
    id: 8256,
    name: "component testing"
  },
  {
    id: 8257,
    name: "componentkit"
  },
  {
    id: 8258,
    name: "composer"
  },
  {
    id: 8259,
    name: "computational grammars"
  },
  {
    id: 8260,
    name: "computer achitecture"
  },
  {
    id: 8261,
    name: "computer science"
  },
  {
    id: 8262,
    name: "computing with words"
  },
  {
    id: 8263,
    name: "concept similarity"
  },
  {
    id: 8264,
    name: "concordion"
  },
  {
    id: 8265,
    name: "concourse"
  },
  {
    id: 8266,
    name: "concurrency"
  },
  {
    id: 8267,
    name: "conditional probability"
  },
  {
    id: 8268,
    name: "conditional random field"
  },
  {
    id: 8269,
    name: "conditions"
  },
  {
    id: 8270,
    name: "conduct system test"
  },
  {
    id: 8271,
    name: "confidence interval"
  },
  {
    id: 8272,
    name: "configuration management"
  },
  {
    id: 8273,
    name: "configuration tour"
  },
  {
    id: 8274,
    name: "conflict management"
  },
  {
    id: 8275,
    name: "connectivity"
  },
  {
    id: 8276,
    name: "connectivity manager"
  },
  {
    id: 8277,
    name: "conoha"
  },
  {
    id: 8278,
    name: "consolidation"
  },
  {
    id: 8279,
    name: "constraint"
  },
  {
    id: 8280,
    name: "constraint layout"
  },
  {
    id: 8281,
    name: "construct"
  },
  {
    id: 8282,
    name: "construct 2"
  },
  {
    id: 8283,
    name: "consultant"
  },
  {
    id: 8284,
    name: "consulting"
  },
  {
    id: 8285,
    name: "consumer finance"
  },
  {
    id: 8286,
    name: "contact provider"
  },
  {
    id: 8287,
    name: "container"
  },
  {
    id: 8288,
    name: "container orchestration"
  },
  {
    id: 8289,
    name: "content distribution networks"
  },
  {
    id: 8290,
    name: "content providers"
  },
  {
    id: 8291,
    name: "continuous delivery"
  },
  {
    id: 8292,
    name: "continuous distributions"
  },
  {
    id: 8293,
    name: "continuous integration"
  },
  {
    id: 8294,
    name: "continuous state space"
  },
  {
    id: 8295,
    name: "continuous testing"
  },
  {
    id: 8296,
    name: "contract and regulation"
  },
  {
    id: 8297,
    name: "controlling"
  },
  {
    id: 8298,
    name: "conversations"
  },
  {
    id: 8299,
    name: "convincing power"
  },
  {
    id: 8300,
    name: "convolutional neural network"
  },
  {
    id: 8301,
    name: "convox"
  },
  {
    id: 8302,
    name: "cookie"
  },
  {
    id: 8303,
    name: "cordova"
  },
  {
    id: 8304,
    name: "core banking"
  },
  {
    id: 8305,
    name: "core data"
  },
  {
    id: 8306,
    name: "core foundation"
  },
  {
    id: 8307,
    name: "core java"
  },
  {
    id: 8308,
    name: "corerender"
  },
  {
    id: 8309,
    name: "coroutines"
  },
  {
    id: 8310,
    name: "corporate actions"
  },
  {
    id: 8311,
    name: "corporate banking"
  },
  {
    id: 8312,
    name: "corporate business development"
  },
  {
    id: 8313,
    name: "corporate sales"
  },
  {
    id: 8314,
    name: "corrective"
  },
  {
    id: 8315,
    name: "corrective maintenance"
  },
  {
    id: 8316,
    name: "correspondence"
  },
  {
    id: 8317,
    name: "cors"
  },
  {
    id: 8318,
    name: "cosmos db"
  },
  {
    id: 8319,
    name: "cost"
  },
  {
    id: 8320,
    name: "cost benefit analysis"
  },
  {
    id: 8321,
    name: "cost estimation"
  },
  {
    id: 8322,
    name: "cost function"
  },
  {
    id: 8323,
    name: "cost planning"
  },
  {
    id: 8324,
    name: "couchbase"
  },
  {
    id: 8325,
    name: "couchdb"
  },
  {
    id: 8326,
    name: "countly"
  },
  {
    id: 8327,
    name: "covariance and correlation"
  },
  {
    id: 8328,
    name: "cpanel"
  },
  {
    id: 8329,
    name: "cpu profiler"
  },
  {
    id: 8330,
    name: "crafty"
  },
  {
    id: 8331,
    name: "crashlytics"
  },
  {
    id: 8332,
    name: "crazy egg"
  },
  {
    id: 8333,
    name: "create test approach"
  },
  {
    id: 8334,
    name: "create workplan"
  },
  {
    id: 8335,
    name: "creating dashboards"
  },
  {
    id: 8336,
    name: "creational"
  },
  {
    id: 8337,
    name: "creative"
  },
  {
    id: 8338,
    name: "credentials"
  },
  {
    id: 8339,
    name: "credit research"
  },
  {
    id: 8340,
    name: "critical thinking"
  },
  {
    id: 8341,
    name: "crittercism"
  },
  {
    id: 8342,
    name: "crm"
  },
  {
    id: 8343,
    name: "cross functional leadership"
  },
  {
    id: 8344,
    name: "crud"
  },
  {
    id: 8345,
    name: "cryengine"
  },
  {
    id: 8346,
    name: "csharp"
  },
  {
    id: 8347,
    name: "csr"
  },
  {
    id: 8348,
    name: "css"
  },
  {
    id: 8349,
    name: "css architecture"
  },
  {
    id: 8350,
    name: "css frameworks"
  },
  {
    id: 8351,
    name: "css modules"
  },
  {
    id: 8352,
    name: "css preprocessors"
  },
  {
    id: 8353,
    name: "csv"
  },
  {
    id: 8354,
    name: "ctil"
  },
  {
    id: 8355,
    name: "ctis"
  },
  {
    id: 8356,
    name: "cubejs"
  },
  {
    id: 8357,
    name: "cucumber"
  },
  {
    id: 8358,
    name: "cumul"
  },
  {
    id: 8359,
    name: "curriculum learning"
  },
  {
    id: 8360,
    name: "customer service"
  },
  {
    id: 8361,
    name: "cyfe"
  },
  {
    id: 8362,
    name: "cypress"
  },
  {
    id: 8363,
    name: "d3"
  },
  {
    id: 8364,
    name: "daas"
  },
  {
    id: 8365,
    name: "dagger"
  },
  {
    id: 8366,
    name: "dart"
  },
  {
    id: 8367,
    name: "dash"
  },
  {
    id: 8368,
    name: "data"
  },
  {
    id: 8369,
    name: "data analysis"
  },
  {
    id: 8370,
    name: "data analyst"
  },
  {
    id: 8371,
    name: "data augmentation"
  },
  {
    id: 8372,
    name: "data backup"
  },
  {
    id: 8373,
    name: "data binding"
  },
  {
    id: 8374,
    name: "data cleaning"
  },
  {
    id: 8375,
    name: "data dictionary"
  },
  {
    id: 8376,
    name: "data driven testing"
  },
  {
    id: 8377,
    name: "data flow"
  },
  {
    id: 8378,
    name: "data formats"
  },
  {
    id: 8379,
    name: "data frames"
  },
  {
    id: 8380,
    name: "data management"
  },
  {
    id: 8381,
    name: "data mining"
  },
  {
    id: 8382,
    name: "data persistence"
  },
  {
    id: 8383,
    name: "data preparation"
  },
  {
    id: 8384,
    name: "data replication"
  },
  {
    id: 8385,
    name: "data scrubbing"
  },
  {
    id: 8386,
    name: "data storage"
  },
  {
    id: 8387,
    name: "data structures"
  },
  {
    id: 8388,
    name: "data studio"
  },
  {
    id: 8389,
    name: "data transfer format"
  },
  {
    id: 8390,
    name: "data views"
  },
  {
    id: 8391,
    name: "database"
  },
  {
    id: 8392,
    name: "database design"
  },
  {
    id: 8393,
    name: "database maintenance"
  },
  {
    id: 8394,
    name: "database name"
  },
  {
    id: 8395,
    name: "database normalization"
  },
  {
    id: 8396,
    name: "database settings"
  },
  {
    id: 8397,
    name: "database testing"
  },
  {
    id: 8398,
    name: "databaselog"
  },
  {
    id: 8399,
    name: "databases"
  },
  {
    id: 8400,
    name: "databox"
  },
  {
    id: 8401,
    name: "databricks"
  },
  {
    id: 8402,
    name: "dataddo"
  },
  {
    id: 8403,
    name: "datadog"
  },
  {
    id: 8404,
    name: "dataform"
  },
  {
    id: 8405,
    name: "datahero"
  },
  {
    id: 8406,
    name: "dataops"
  },
  {
    id: 8407,
    name: "dataset"
  },
  {
    id: 8408,
    name: "datastructure algorithm"
  },
  {
    id: 8409,
    name: "datatron"
  },
  {
    id: 8410,
    name: "datatype"
  },
  {
    id: 8411,
    name: "dbscan"
  },
  {
    id: 8412,
    name: "ddl"
  },
  {
    id: 8413,
    name: "debian"
  },
  {
    id: 8414,
    name: "debugger"
  },
  {
    id: 8415,
    name: "debugging"
  },
  {
    id: 8416,
    name: "decentralize"
  },
  {
    id: 8417,
    name: "decision table based testing"
  },
  {
    id: 8418,
    name: "decision table testing"
  },
  {
    id: 8419,
    name: "decision testing and coverage"
  },
  {
    id: 8420,
    name: "decision tree"
  },
  {
    id: 8421,
    name: "decodable"
  },
  {
    id: 8422,
    name: "decoder"
  },
  {
    id: 8423,
    name: "deep belief networks"
  },
  {
    id: 8424,
    name: "deep learning"
  },
  {
    id: 8425,
    name: "deeplinkdispatch"
  },
  {
    id: 8426,
    name: "deepstream"
  },
  {
    id: 8427,
    name: "defect clustering"
  },
  {
    id: 8428,
    name: "deis"
  },
  {
    id: 8429,
    name: "deis workflow"
  },
  {
    id: 8430,
    name: "delegate"
  },
  {
    id: 8431,
    name: "delegating tasks"
  },
  {
    id: 8432,
    name: "delegation"
  },
  {
    id: 8433,
    name: "delete"
  },
  {
    id: 8434,
    name: "deliberate discovery"
  },
  {
    id: 8435,
    name: "delivery leadership"
  },
  {
    id: 8436,
    name: "denoising"
  },
  {
    id: 8437,
    name: "densities"
  },
  {
    id: 8438,
    name: "dependencies management"
  },
  {
    id: 8439,
    name: "dependency injection"
  },
  {
    id: 8440,
    name: "dependency parsing"
  },
  {
    id: 8441,
    name: "dependency tree"
  },
  {
    id: 8442,
    name: "deploy"
  },
  {
    id: 8443,
    name: "deploybot"
  },
  {
    id: 8444,
    name: "deployer"
  },
  {
    id: 8445,
    name: "depth first search"
  },
  {
    id: 8446,
    name: "derivatives"
  },
  {
    id: 8447,
    name: "design"
  },
  {
    id: 8448,
    name: "design development"
  },
  {
    id: 8449,
    name: "design guideline"
  },
  {
    id: 8450,
    name: "design patterns"
  },
  {
    id: 8451,
    name: "design states"
  },
  {
    id: 8452,
    name: "design ui"
  },
  {
    id: 8453,
    name: "designing"
  },
  {
    id: 8454,
    name: "desktop"
  },
  {
    id: 8455,
    name: "detekt"
  },
  {
    id: 8456,
    name: "determine resource requirements"
  },
  {
    id: 8457,
    name: "development management"
  },
  {
    id: 8458,
    name: "development testing"
  },
  {
    id: 8459,
    name: "device orientation"
  },
  {
    id: 8460,
    name: "devices"
  },
  {
    id: 8461,
    name: "devops"
  },
  {
    id: 8462,
    name: "devsecops"
  },
  {
    id: 8463,
    name: "dgraph"
  },
  {
    id: 8464,
    name: "diagnostics"
  },
  {
    id: 8465,
    name: "dialogs"
  },
  {
    id: 8466,
    name: "digital business analyst"
  },
  {
    id: 8467,
    name: "digital marketing"
  },
  {
    id: 8468,
    name: "digital media"
  },
  {
    id: 8469,
    name: "digitalocean"
  },
  {
    id: 8470,
    name: "digitalocean monitoring"
  },
  {
    id: 8471,
    name: "dijkstra"
  },
  {
    id: 8472,
    name: "dimensionality reduction"
  },
  {
    id: 8473,
    name: "dinamodb"
  },
  {
    id: 8474,
    name: "directadmin"
  },
  {
    id: 8475,
    name: "directx"
  },
  {
    id: 8476,
    name: "directx9"
  },
  {
    id: 8477,
    name: "directx11"
  },
  {
    id: 8478,
    name: "directx12"
  },
  {
    id: 8479,
    name: "dirichlet"
  },
  {
    id: 8480,
    name: "discrete distributions"
  },
  {
    id: 8481,
    name: "dispatchqueue"
  },
  {
    id: 8482,
    name: "distillation"
  },
  {
    id: 8483,
    name: "distributed control system"
  },
  {
    id: 8484,
    name: "distributed parameter networks"
  },
  {
    id: 8485,
    name: "distributed processing"
  },
  {
    id: 8486,
    name: "distribution network"
  },
  {
    id: 8487,
    name: "distribution of goods"
  },
  {
    id: 8488,
    name: "djangae"
  },
  {
    id: 8489,
    name: "django"
  },
  {
    id: 8490,
    name: "dkron"
  },
  {
    id: 8491,
    name: "dns"
  },
  {
    id: 8492,
    name: "docker"
  },
  {
    id: 8493,
    name: "docker swarm"
  },
  {
    id: 8494,
    name: "docker-compose"
  },
  {
    id: 8495,
    name: "doctrine2"
  },
  {
    id: 8496,
    name: "document"
  },
  {
    id: 8497,
    name: "document analysis"
  },
  {
    id: 8498,
    name: "document classification"
  },
  {
    id: 8499,
    name: "document management"
  },
  {
    id: 8500,
    name: "document processing"
  },
  {
    id: 8501,
    name: "document representation"
  },
  {
    id: 8502,
    name: "documentation"
  },
  {
    id: 8503,
    name: "documentation skills"
  },
  {
    id: 8504,
    name: "dom"
  },
  {
    id: 8505,
    name: "dom manipulation"
  },
  {
    id: 8506,
    name: "dom tree"
  },
  {
    id: 8507,
    name: "domo"
  },
  {
    id: 8508,
    name: "double list"
  },
  {
    id: 8509,
    name: "download manager"
  },
  {
    id: 8510,
    name: "downloadable fonts"
  },
  {
    id: 8511,
    name: "drafting business process flow"
  },
  {
    id: 8512,
    name: "drawables"
  },
  {
    id: 8513,
    name: "drawing"
  },
  {
    id: 8514,
    name: "dreamfactory"
  },
  {
    id: 8515,
    name: "dreamhost"
  },
  {
    id: 8516,
    name: "drone"
  },
  {
    id: 8517,
    name: "dropout"
  },
  {
    id: 8518,
    name: "due diligence"
  },
  {
    id: 8519,
    name: "dynamic links"
  },
  {
    id: 8520,
    name: "dynamic programming"
  },
  {
    id: 8521,
    name: "dynamic web"
  },
  {
    id: 8522,
    name: "dynamodb"
  },
  {
    id: 8523,
    name: "dynatrace"
  },
  {
    id: 8524,
    name: "e2e testing"
  },
  {
    id: 8525,
    name: "e-commerce"
  },
  {
    id: 8526,
    name: "e-learning"
  },
  {
    id: 8527,
    name: "early stopping"
  },
  {
    id: 8528,
    name: "early testing"
  },
  {
    id: 8529,
    name: "eclat algorithm"
  },
  {
    id: 8530,
    name: "ecommerce"
  },
  {
    id: 8531,
    name: "edge"
  },
  {
    id: 8532,
    name: "education"
  },
  {
    id: 8533,
    name: "efficiency"
  },
  {
    id: 8534,
    name: "effort estimation"
  },
  {
    id: 8535,
    name: "elastic cloud"
  },
  {
    id: 8536,
    name: "elastic stack"
  },
  {
    id: 8537,
    name: "elastichosts"
  },
  {
    id: 8538,
    name: "elasticsearch"
  },
  {
    id: 8539,
    name: "elicitation"
  },
  {
    id: 8540,
    name: "elixir"
  },
  {
    id: 8541,
    name: "embedded linux"
  },
  {
    id: 8542,
    name: "ember"
  },
  {
    id: 8543,
    name: "emoji"
  },
  {
    id: 8544,
    name: "emotion"
  },
  {
    id: 8545,
    name: "emotion recognition"
  },
  {
    id: 8546,
    name: "emulator"
  },
  {
    id: 8547,
    name: "emulators"
  },
  {
    id: 8548,
    name: "encodable"
  },
  {
    id: 8549,
    name: "encoder"
  },
  {
    id: 8550,
    name: "end inventory creation"
  },
  {
    id: 8551,
    name: "end test design"
  },
  {
    id: 8552,
    name: "end to end testing"
  },
  {
    id: 8553,
    name: "energy"
  },
  {
    id: 8554,
    name: "engine yard cloud"
  },
  {
    id: 8555,
    name: "engineering"
  },
  {
    id: 8556,
    name: "ensemble learning"
  },
  {
    id: 8557,
    name: "entity framework"
  },
  {
    id: 8558,
    name: "entity framework core"
  },
  {
    id: 8559,
    name: "entity signal"
  },
  {
    id: 8560,
    name: "enums"
  },
  {
    id: 8561,
    name: "environment"
  },
  {
    id: 8562,
    name: "environmental testing"
  },
  {
    id: 8563,
    name: "enzyme"
  },
  {
    id: 8564,
    name: "epic"
  },
  {
    id: 8565,
    name: "epic unreal engine"
  },
  {
    id: 8566,
    name: "equinix metal"
  },
  {
    id: 8567,
    name: "equivalence class partitioning"
  },
  {
    id: 8568,
    name: "equivalence partitioning"
  },
  {
    id: 8569,
    name: "ergonomic"
  },
  {
    id: 8570,
    name: "erp"
  },
  {
    id: 8571,
    name: "error guessing"
  },
  {
    id: 8572,
    name: "es6"
  },
  {
    id: 8573,
    name: "eslint"
  },
  {
    id: 8574,
    name: "espresso"
  },
  {
    id: 8575,
    name: "estimation"
  },
  {
    id: 8576,
    name: "etcd"
  },
  {
    id: 8577,
    name: "evaluating exit criteria"
  },
  {
    id: 8578,
    name: "evolving architectures"
  },
  {
    id: 8579,
    name: "exaggeration"
  },
  {
    id: 8580,
    name: "excel powerpoint"
  },
  {
    id: 8581,
    name: "excellent analytical"
  },
  {
    id: 8582,
    name: "execution"
  },
  {
    id: 8583,
    name: "exhaustive testing"
  },
  {
    id: 8584,
    name: "exoplayer"
  },
  {
    id: 8585,
    name: "expectation and mean"
  },
  {
    id: 8586,
    name: "experience"
  },
  {
    id: 8587,
    name: "experience design"
  },
  {
    id: 8588,
    name: "explicit intents"
  },
  {
    id: 8589,
    name: "exploratory"
  },
  {
    id: 8590,
    name: "exploratory testing"
  },
  {
    id: 8591,
    name: "expo sketch"
  },
  {
    id: 8592,
    name: "exponential"
  },
  {
    id: 8593,
    name: "express"
  },
  {
    id: 8594,
    name: "express gateway"
  },
  {
    id: 8595,
    name: "expressjs"
  },
  {
    id: 8596,
    name: "extracting information"
  },
  {
    id: 8597,
    name: "eye detection"
  },
  {
    id: 8598,
    name: "faas"
  },
  {
    id: 8599,
    name: "faasd"
  },
  {
    id: 8600,
    name: "fabric"
  },
  {
    id: 8601,
    name: "face alignment"
  },
  {
    id: 8602,
    name: "face detection"
  },
  {
    id: 8603,
    name: "face detection and recognition"
  },
  {
    id: 8604,
    name: "face images"
  },
  {
    id: 8605,
    name: "face models"
  },
  {
    id: 8606,
    name: "face recognition"
  },
  {
    id: 8607,
    name: "facebook analytics"
  },
  {
    id: 8608,
    name: "facebook pixel"
  },
  {
    id: 8609,
    name: "facebook sonar"
  },
  {
    id: 8610,
    name: "fastag"
  },
  {
    id: 8611,
    name: "fastapi"
  },
  {
    id: 8612,
    name: "faster payments"
  },
  {
    id: 8613,
    name: "fastlane"
  },
  {
    id: 8614,
    name: "fathom analytics"
  },
  {
    id: 8615,
    name: "feature extraction"
  },
  {
    id: 8616,
    name: "feature recognition"
  },
  {
    id: 8617,
    name: "feature tour"
  },
  {
    id: 8618,
    name: "fedora"
  },
  {
    id: 8619,
    name: "feedfoward neural network"
  },
  {
    id: 8620,
    name: "fetch api"
  },
  {
    id: 8621,
    name: "field lengths"
  },
  {
    id: 8622,
    name: "file formats"
  },
  {
    id: 8623,
    name: "file provider"
  },
  {
    id: 8624,
    name: "file storage"
  },
  {
    id: 8625,
    name: "file systems"
  },
  {
    id: 8626,
    name: "filebeat"
  },
  {
    id: 8627,
    name: "finance"
  },
  {
    id: 8628,
    name: "finance control"
  },
  {
    id: 8629,
    name: "financial analysis"
  },
  {
    id: 8630,
    name: "financial analyst"
  },
  {
    id: 8631,
    name: "financial product"
  },
  {
    id: 8632,
    name: "financial risk management"
  },
  {
    id: 8633,
    name: "financial services"
  },
  {
    id: 8634,
    name: "financial statement analysis"
  },
  {
    id: 8635,
    name: "fintech environments"
  },
  {
    id: 8636,
    name: "firebase"
  },
  {
    id: 8637,
    name: "firebase authentication"
  },
  {
    id: 8638,
    name: "firebase cloude function"
  },
  {
    id: 8639,
    name: "firebase hosting"
  },
  {
    id: 8640,
    name: "firebase realtime database"
  },
  {
    id: 8641,
    name: "firestore"
  },
  {
    id: 8642,
    name: "firetv"
  },
  {
    id: 8643,
    name: "fixed income"
  },
  {
    id: 8644,
    name: "flash"
  },
  {
    id: 8645,
    name: "flask"
  },
  {
    id: 8646,
    name: "flask jsondash"
  },
  {
    id: 8647,
    name: "flatbuffer"
  },
  {
    id: 8648,
    name: "flexibility"
  },
  {
    id: 8649,
    name: "flink"
  },
  {
    id: 8650,
    name: "flow charts"
  },
  {
    id: 8651,
    name: "flow diagrams"
  },
  {
    id: 8652,
    name: "flowchart tools"
  },
  {
    id: 8653,
    name: "flowlab"
  },
  {
    id: 8654,
    name: "fluentd"
  },
  {
    id: 8655,
    name: "flutter"
  },
  {
    id: 8656,
    name: "flux"
  },
  {
    id: 8657,
    name: "fonts"
  },
  {
    id: 8658,
    name: "forecasting"
  },
  {
    id: 8659,
    name: "foreign exchange"
  },
  {
    id: 8660,
    name: "foreign key"
  },
  {
    id: 8661,
    name: "fortrabbit"
  },
  {
    id: 8662,
    name: "forward proxy"
  },
  {
    id: 8663,
    name: "foundation"
  },
  {
    id: 8664,
    name: "fp tree"
  },
  {
    id: 8665,
    name: "fragment lifecycle"
  },
  {
    id: 8666,
    name: "fragment manager"
  },
  {
    id: 8667,
    name: "fragment transaction"
  },
  {
    id: 8668,
    name: "fragments"
  },
  {
    id: 8669,
    name: "frame"
  },
  {
    id: 8670,
    name: "frame layout"
  },
  {
    id: 8671,
    name: "frame-based layout"
  },
  {
    id: 8672,
    name: "framework"
  },
  {
    id: 8673,
    name: "free texts"
  },
  {
    id: 8674,
    name: "freeboard"
  },
  {
    id: 8675,
    name: "freebsd"
  },
  {
    id: 8676,
    name: "freshpaint"
  },
  {
    id: 8677,
    name: "front end"
  },
  {
    id: 8678,
    name: "frs"
  },
  {
    id: 8679,
    name: "ftp"
  },
  {
    id: 8680,
    name: "functional analysis"
  },
  {
    id: 8681,
    name: "functional consultancy"
  },
  {
    id: 8682,
    name: "functional consultant"
  },
  {
    id: 8683,
    name: "functional incremental"
  },
  {
    id: 8684,
    name: "functional programming"
  },
  {
    id: 8685,
    name: "functional specifications"
  },
  {
    id: 8686,
    name: "functional support"
  },
  {
    id: 8687,
    name: "functional testing"
  },
  {
    id: 8688,
    name: "functions"
  },
  {
    id: 8689,
    name: "fundamentals"
  },
  {
    id: 8690,
    name: "fuzzy c-means"
  },
  {
    id: 8691,
    name: "fuzzy classification"
  },
  {
    id: 8692,
    name: "fuzzy decision tree"
  },
  {
    id: 8693,
    name: "fx derivatives"
  },
  {
    id: 8694,
    name: "ga"
  },
  {
    id: 8695,
    name: "game  logic"
  },
  {
    id: 8696,
    name: "game design"
  },
  {
    id: 8697,
    name: "game ffeatures"
  },
  {
    id: 8698,
    name: "game maker"
  },
  {
    id: 8699,
    name: "game maker studio"
  },
  {
    id: 8700,
    name: "game play"
  },
  {
    id: 8701,
    name: "game play design"
  },
  {
    id: 8702,
    name: "game prototype"
  },
  {
    id: 8703,
    name: "game space design"
  },
  {
    id: 8704,
    name: "gamefroot"
  },
  {
    id: 8705,
    name: "gamemaker studio"
  },
  {
    id: 8706,
    name: "gamequery"
  },
  {
    id: 8707,
    name: "games"
  },
  {
    id: 8708,
    name: "gamesalad"
  },
  {
    id: 8709,
    name: "gandi"
  },
  {
    id: 8710,
    name: "gap analysis"
  },
  {
    id: 8711,
    name: "gatsbyjs"
  },
  {
    id: 8712,
    name: "gauges"
  },
  {
    id: 8713,
    name: "gaussian"
  },
  {
    id: 8714,
    name: "gaussian mixture model"
  },
  {
    id: 8715,
    name: "gcd"
  },
  {
    id: 8716,
    name: "gcd event"
  },
  {
    id: 8717,
    name: "gcd queue"
  },
  {
    id: 8718,
    name: "gdevelop"
  },
  {
    id: 8719,
    name: "geckoboard"
  },
  {
    id: 8720,
    name: "generalist cg skills?"
  },
  {
    id: 8721,
    name: "generative adversarial network"
  },
  {
    id: 8722,
    name: "gensim"
  },
  {
    id: 8723,
    name: "geometric"
  },
  {
    id: 8724,
    name: "geoserver"
  },
  {
    id: 8725,
    name: "gesture recognition"
  },
  {
    id: 8726,
    name: "get"
  },
  {
    id: 8727,
    name: "gibbs sampler"
  },
  {
    id: 8728,
    name: "gibbs sampling"
  },
  {
    id: 8729,
    name: "git"
  },
  {
    id: 8730,
    name: "gitea"
  },
  {
    id: 8731,
    name: "github"
  },
  {
    id: 8732,
    name: "github actions"
  },
  {
    id: 8733,
    name: "gitkraken"
  },
  {
    id: 8734,
    name: "gitlab"
  },
  {
    id: 8735,
    name: "gitlab ci"
  },
  {
    id: 8736,
    name: "gitlab-ci"
  },
  {
    id: 8737,
    name: "glamorous"
  },
  {
    id: 8738,
    name: "glassfish"
  },
  {
    id: 8739,
    name: "glide"
  },
  {
    id: 8740,
    name: "glitch"
  },
  {
    id: 8741,
    name: "go"
  },
  {
    id: 8742,
    name: "goblin base server"
  },
  {
    id: 8743,
    name: "godaddy"
  },
  {
    id: 8744,
    name: "godot"
  },
  {
    id: 8745,
    name: "godot engine"
  },
  {
    id: 8746,
    name: "gogs"
  },
  {
    id: 8747,
    name: "golang"
  },
  {
    id: 8748,
    name: "goldilocks"
  },
  {
    id: 8749,
    name: "good database knowledge"
  },
  {
    id: 8750,
    name: "gooddata"
  },
  {
    id: 8751,
    name: "google analytics"
  },
  {
    id: 8752,
    name: "google anthos"
  },
  {
    id: 8753,
    name: "google app engine"
  },
  {
    id: 8754,
    name: "google app maker"
  },
  {
    id: 8755,
    name: "google bigquery"
  },
  {
    id: 8756,
    name: "google cloud"
  },
  {
    id: 8757,
    name: "google cloud bigtable"
  },
  {
    id: 8758,
    name: "google cloud firestore"
  },
  {
    id: 8759,
    name: "google cloud functions"
  },
  {
    id: 8760,
    name: "google cloud memorystore"
  },
  {
    id: 8761,
    name: "google cloud platform"
  },
  {
    id: 8762,
    name: "google cloud pubsub"
  },
  {
    id: 8763,
    name: "google cloud run"
  },
  {
    id: 8764,
    name: "google cloud sql"
  },
  {
    id: 8765,
    name: "google cloud storage"
  },
  {
    id: 8766,
    name: "google colab"
  },
  {
    id: 8767,
    name: "google compute engine"
  },
  {
    id: 8768,
    name: "google datastudio"
  },
  {
    id: 8769,
    name: "google libraries"
  },
  {
    id: 8770,
    name: "google maps"
  },
  {
    id: 8771,
    name: "google optimize"
  },
  {
    id: 8772,
    name: "google play services"
  },
  {
    id: 8773,
    name: "google search console"
  },
  {
    id: 8774,
    name: "google tag manager"
  },
  {
    id: 8775,
    name: "gosquared"
  },
  {
    id: 8776,
    name: "government"
  },
  {
    id: 8777,
    name: "gprs"
  },
  {
    id: 8778,
    name: "gradient descent"
  },
  {
    id: 8779,
    name: "gradle"
  },
  {
    id: 8780,
    name: "grafana"
  },
  {
    id: 8781,
    name: "graph"
  },
  {
    id: 8782,
    name: "graph db"
  },
  {
    id: 8783,
    name: "graph matching"
  },
  {
    id: 8784,
    name: "graphcool-framework"
  },
  {
    id: 8785,
    name: "graphic model"
  },
  {
    id: 8786,
    name: "graphic modeling"
  },
  {
    id: 8787,
    name: "graphic tools"
  },
  {
    id: 8788,
    name: "graphics"
  },
  {
    id: 8789,
    name: "graphite"
  },
  {
    id: 8790,
    name: "graphql"
  },
  {
    id: 8791,
    name: "graylog"
  },
  {
    id: 8792,
    name: "grid view"
  },
  {
    id: 8793,
    name: "groovy"
  },
  {
    id: 8794,
    name: "grouparoo"
  },
  {
    id: 8795,
    name: "gru"
  },
  {
    id: 8796,
    name: "grunt"
  },
  {
    id: 8797,
    name: "gson"
  },
  {
    id: 8798,
    name: "gtid"
  },
  {
    id: 8799,
    name: "gulp"
  },
  {
    id: 8800,
    name: "gunicorn"
  },
  {
    id: 8801,
    name: "hadoop"
  },
  {
    id: 8802,
    name: "hand written character recognition"
  },
  {
    id: 8803,
    name: "handlers"
  },
  {
    id: 8804,
    name: "handling missing value"
  },
  {
    id: 8805,
    name: "handwritting recognition"
  },
  {
    id: 8806,
    name: "hapi"
  },
  {
    id: 8807,
    name: "haproxy"
  },
  {
    id: 8808,
    name: "hardware"
  },
  {
    id: 8809,
    name: "hardware maintenance"
  },
  {
    id: 8810,
    name: "hash table"
  },
  {
    id: 8811,
    name: "hashing"
  },
  {
    id: 8812,
    name: "haskell"
  },
  {
    id: 8813,
    name: "hasura cloud"
  },
  {
    id: 8814,
    name: "haxe"
  },
  {
    id: 8815,
    name: "hdbscan"
  },
  {
    id: 8816,
    name: "head"
  },
  {
    id: 8817,
    name: "healthcare"
  },
  {
    id: 8818,
    name: "healthchecks"
  },
  {
    id: 8819,
    name: "heap"
  },
  {
    id: 8820,
    name: "heap sort"
  },
  {
    id: 8821,
    name: "heathcare consultant"
  },
  {
    id: 8822,
    name: "heatmaps"
  },
  {
    id: 8823,
    name: "helm"
  },
  {
    id: 8824,
    name: "heroku"
  },
  {
    id: 8825,
    name: "heroku postgres"
  },
  {
    id: 8826,
    name: "heroku-ci"
  },
  {
    id: 8827,
    name: "hetzner"
  },
  {
    id: 8828,
    name: "heuristic"
  },
  {
    id: 8829,
    name: "hibernate"
  },
  {
    id: 8830,
    name: "hierachical clustering"
  },
  {
    id: 8831,
    name: "high level design"
  },
  {
    id: 8832,
    name: "hilt"
  },
  {
    id: 8833,
    name: "hiptest"
  },
  {
    id: 8834,
    name: "hirefire"
  },
  {
    id: 8835,
    name: "hiring"
  },
  {
    id: 8836,
    name: "hive"
  },
  {
    id: 8837,
    name: "hockeyapp"
  },
  {
    id: 8838,
    name: "holistics"
  },
  {
    id: 8839,
    name: "honeybadger"
  },
  {
    id: 8840,
    name: "honeycomb"
  },
  {
    id: 8841,
    name: "hosting"
  },
  {
    id: 8842,
    name: "hosting server"
  },
  {
    id: 8843,
    name: "hotjar"
  },
  {
    id: 8844,
    name: "hr"
  },
  {
    id: 8845,
    name: "html"
  },
  {
    id: 8846,
    name: "html5"
  },
  {
    id: 8847,
    name: "http"
  },
  {
    id: 8848,
    name: "https"
  },
  {
    id: 8849,
    name: "hub"
  },
  {
    id: 8850,
    name: "hubframework"
  },
  {
    id: 8851,
    name: "huggingface transformers"
  },
  {
    id: 8852,
    name: "hugo"
  },
  {
    id: 8853,
    name: "hybrid"
  },
  {
    id: 8854,
    name: "hybris"
  },
  {
    id: 8855,
    name: "hypergeometric"
  },
  {
    id: 8856,
    name: "hypothesis testing"
  },
  {
    id: 8857,
    name: "i/o management"
  },
  {
    id: 8858,
    name: "iaas"
  },
  {
    id: 8859,
    name: "ibm cloud"
  },
  {
    id: 8860,
    name: "ibm cognos analytics"
  },
  {
    id: 8861,
    name: "icloud"
  },
  {
    id: 8862,
    name: "icons"
  },
  {
    id: 8863,
    name: "ict"
  },
  {
    id: 8864,
    name: "identify test team"
  },
  {
    id: 8865,
    name: "iid"
  },
  {
    id: 8866,
    name: "iis"
  },
  {
    id: 8867,
    name: "image loaders"
  },
  {
    id: 8868,
    name: "imitation learning"
  },
  {
    id: 8869,
    name: "impact analysis"
  },
  {
    id: 8870,
    name: "impactjs"
  },
  {
    id: 8871,
    name: "implementation"
  },
  {
    id: 8872,
    name: "implicit intents"
  },
  {
    id: 8873,
    name: "important laws"
  },
  {
    id: 8874,
    name: "incident management"
  },
  {
    id: 8875,
    name: "incremental"
  },
  {
    id: 8876,
    name: "indepence"
  },
  {
    id: 8877,
    name: "index"
  },
  {
    id: 8878,
    name: "indexes"
  },
  {
    id: 8879,
    name: "information extraction"
  },
  {
    id: 8880,
    name: "information gathering"
  },
  {
    id: 8881,
    name: "infrastructure as code"
  },
  {
    id: 8882,
    name: "infrastructure monitoring"
  },
  {
    id: 8883,
    name: "infrastructure provisioning"
  },
  {
    id: 8884,
    name: "initializers"
  },
  {
    id: 8885,
    name: "input fields"
  },
  {
    id: 8886,
    name: "input to device"
  },
  {
    id: 8887,
    name: "insertion sort"
  },
  {
    id: 8888,
    name: "insights"
  },
  {
    id: 8889,
    name: "instabug"
  },
  {
    id: 8890,
    name: "install testing"
  },
  {
    id: 8891,
    name: "installation testing"
  },
  {
    id: 8892,
    name: "instana"
  },
  {
    id: 8893,
    name: "instant apps"
  },
  {
    id: 8894,
    name: "instrumentation tests"
  },
  {
    id: 8895,
    name: "instruments"
  },
  {
    id: 8896,
    name: "insurance"
  },
  {
    id: 8897,
    name: "insurance product"
  },
  {
    id: 8898,
    name: "integration testing"
  },
  {
    id: 8899,
    name: "integration tests"
  },
  {
    id: 8900,
    name: "integrity"
  },
  {
    id: 8901,
    name: "intent"
  },
  {
    id: 8902,
    name: "intent filters"
  },
  {
    id: 8903,
    name: "intent service"
  },
  {
    id: 8904,
    name: "interaction"
  },
  {
    id: 8905,
    name: "interana"
  },
  {
    id: 8906,
    name: "interface design"
  },
  {
    id: 8907,
    name: "interface testing"
  },
  {
    id: 8908,
    name: "interfaces"
  },
  {
    id: 8909,
    name: "internet banking"
  },
  {
    id: 8910,
    name: "internet marketing"
  },
  {
    id: 8911,
    name: "internet technologies"
  },
  {
    id: 8912,
    name: "interoperability"
  },
  {
    id: 8913,
    name: "interpersonal skills"
  },
  {
    id: 8914,
    name: "interquartile range"
  },
  {
    id: 8915,
    name: "interrupt"
  },
  {
    id: 8916,
    name: "interruption"
  },
  {
    id: 8917,
    name: "interviewing"
  },
  {
    id: 8918,
    name: "inventory of test items"
  },
  {
    id: 8919,
    name: "investment banking"
  },
  {
    id: 8920,
    name: "ionic"
  },
  {
    id: 8921,
    name: "ios"
  },
  {
    id: 8922,
    name: "ios test"
  },
  {
    id: 8923,
    name: "iphone game programming"
  },
  {
    id: 8924,
    name: "iphone sdk"
  },
  {
    id: 8925,
    name: "ipyvolume"
  },
  {
    id: 8926,
    name: "istio"
  },
  {
    id: 8927,
    name: "it business analysis"
  },
  {
    id: 8928,
    name: "it business analyst"
  },
  {
    id: 8929,
    name: "it consulting"
  },
  {
    id: 8930,
    name: "it professional practice project"
  },
  {
    id: 8931,
    name: "it project coordinator"
  },
  {
    id: 8932,
    name: "it sales"
  },
  {
    id: 8933,
    name: "iterative"
  },
  {
    id: 8934,
    name: "itunes connect"
  },
  {
    id: 8935,
    name: "j2ee"
  },
  {
    id: 8936,
    name: "jaeger"
  },
  {
    id: 8937,
    name: "jasime"
  },
  {
    id: 8938,
    name: "jasmine"
  },
  {
    id: 8939,
    name: "java"
  },
  {
    id: 8940,
    name: "java core"
  },
  {
    id: 8941,
    name: "javascript"
  },
  {
    id: 8942,
    name: "javascript framework"
  },
  {
    id: 8943,
    name: "javase"
  },
  {
    id: 8944,
    name: "jboss"
  },
  {
    id: 8945,
    name: "jekyll"
  },
  {
    id: 8946,
    name: "jelastic"
  },
  {
    id: 8947,
    name: "jenkins"
  },
  {
    id: 8948,
    name: "jest"
  },
  {
    id: 8949,
    name: "jetty"
  },
  {
    id: 8950,
    name: "jfrog"
  },
  {
    id: 8951,
    name: "jgiven"
  },
  {
    id: 8952,
    name: "jira"
  },
  {
    id: 8953,
    name: "jmeter"
  },
  {
    id: 8954,
    name: "joyent cloud"
  },
  {
    id: 8955,
    name: "jquery"
  },
  {
    id: 8956,
    name: "json"
  },
  {
    id: 8957,
    name: "json converters"
  },
  {
    id: 8958,
    name: "json serialization"
  },
  {
    id: 8959,
    name: "julia"
  },
  {
    id: 8960,
    name: "junit"
  },
  {
    id: 8961,
    name: "junoone"
  },
  {
    id: 8962,
    name: "jupyter"
  },
  {
    id: 8963,
    name: "jupyter lab"
  },
  {
    id: 8964,
    name: "jupyter notebook"
  },
  {
    id: 8965,
    name: "jwt"
  },
  {
    id: 8966,
    name: "k6 tool"
  },
  {
    id: 8967,
    name: "k-means clustering"
  },
  {
    id: 8968,
    name: "k-nearest neighbour"
  },
  {
    id: 8969,
    name: "kafka"
  },
  {
    id: 8970,
    name: "kaggle"
  },
  {
    id: 8971,
    name: "kali linux"
  },
  {
    id: 8972,
    name: "katalon recorder"
  },
  {
    id: 8973,
    name: "katalon studio"
  },
  {
    id: 8974,
    name: "keen"
  },
  {
    id: 8975,
    name: "kernel density estimation"
  },
  {
    id: 8976,
    name: "key frame animation"
  },
  {
    id: 8977,
    name: "keyedarchiver"
  },
  {
    id: 8978,
    name: "keys"
  },
  {
    id: 8979,
    name: "keystore"
  },
  {
    id: 8980,
    name: "kibana"
  },
  {
    id: 8981,
    name: "kif"
  },
  {
    id: 8982,
    name: "kinsta"
  },
  {
    id: 8983,
    name: "kinto"
  },
  {
    id: 8984,
    name: "kintohub"
  },
  {
    id: 8985,
    name: "kissmetrics"
  },
  {
    id: 8986,
    name: "kivy"
  },
  {
    id: 8987,
    name: "klaros"
  },
  {
    id: 8988,
    name: "klipfolio"
  },
  {
    id: 8989,
    name: "knative"
  },
  {
    id: 8990,
    name: "knowage"
  },
  {
    id: 8991,
    name: "knowi"
  },
  {
    id: 8992,
    name: "knowledge"
  },
  {
    id: 8993,
    name: "koa"
  },
  {
    id: 8994,
    name: "kobiton"
  },
  {
    id: 8995,
    name: "kodein"
  },
  {
    id: 8996,
    name: "koin"
  },
  {
    id: 8997,
    name: "koko analytics"
  },
  {
    id: 8998,
    name: "kong"
  },
  {
    id: 8999,
    name: "kontena"
  },
  {
    id: 9000,
    name: "kotlin"
  },
  {
    id: 9001,
    name: "ktlint"
  },
  {
    id: 9002,
    name: "kualitee"
  },
  {
    id: 9003,
    name: "kubeless"
  },
  {
    id: 9004,
    name: "kubernetes"
  },
  {
    id: 9005,
    name: "kubesail"
  },
  {
    id: 9006,
    name: "kumologica"
  },
  {
    id: 9007,
    name: "lambada framework"
  },
  {
    id: 9008,
    name: "lambdatest"
  },
  {
    id: 9009,
    name: "landscape"
  },
  {
    id: 9010,
    name: "languages"
  },
  {
    id: 9011,
    name: "laravel"
  },
  {
    id: 9012,
    name: "laravel elixir"
  },
  {
    id: 9013,
    name: "laravel forge"
  },
  {
    id: 9014,
    name: "laravel vapor"
  },
  {
    id: 9015,
    name: "latent variable models"
  },
  {
    id: 9016,
    name: "lauchkit"
  },
  {
    id: 9017,
    name: "law of large numbers"
  },
  {
    id: 9018,
    name: "layout"
  },
  {
    id: 9019,
    name: "layout instrument"
  },
  {
    id: 9020,
    name: "lead developers"
  },
  {
    id: 9021,
    name: "lead generation"
  },
  {
    id: 9022,
    name: "lead management"
  },
  {
    id: 9023,
    name: "leadership"
  },
  {
    id: 9024,
    name: "leadership training"
  },
  {
    id: 9025,
    name: "leaks"
  },
  {
    id: 9026,
    name: "lean"
  },
  {
    id: 9027,
    name: "leancloud"
  },
  {
    id: 9028,
    name: "learning agents"
  },
  {
    id: 9029,
    name: "learning rate schedule"
  },
  {
    id: 9030,
    name: "lending"
  },
  {
    id: 9031,
    name: "less"
  },
  {
    id: 9032,
    name: "lettuce"
  },
  {
    id: 9033,
    name: "level design"
  },
  {
    id: 9034,
    name: "leveldb"
  },
  {
    id: 9035,
    name: "leveraged investment"
  },
  {
    id: 9036,
    name: "lexical database"
  },
  {
    id: 9037,
    name: "lexical semantics"
  },
  {
    id: 9038,
    name: "libgdx"
  },
  {
    id: 9039,
    name: "library"
  },
  {
    id: 9040,
    name: "librenms"
  },
  {
    id: 9041,
    name: "life cycle"
  },
  {
    id: 9042,
    name: "lifecycle"
  },
  {
    id: 9043,
    name: "lift"
  },
  {
    id: 9044,
    name: "lightbdd"
  },
  {
    id: 9045,
    name: "lighttpd"
  },
  {
    id: 9046,
    name: "linear algebra"
  },
  {
    id: 9047,
    name: "linear layout"
  },
  {
    id: 9048,
    name: "linear regression"
  },
  {
    id: 9049,
    name: "linked list"
  },
  {
    id: 9050,
    name: "linkedlist"
  },
  {
    id: 9051,
    name: "linkurious"
  },
  {
    id: 9052,
    name: "linode"
  },
  {
    id: 9053,
    name: "linq"
  },
  {
    id: 9054,
    name: "linters"
  },
  {
    id: 9055,
    name: "linux"
  },
  {
    id: 9056,
    name: "list view"
  },
  {
    id: 9057,
    name: "livedata"
  },
  {
    id: 9058,
    name: "lldb"
  },
  {
    id: 9059,
    name: "load balancer"
  },
  {
    id: 9060,
    name: "load testing"
  },
  {
    id: 9061,
    name: "loan"
  },
  {
    id: 9062,
    name: "loan management system"
  },
  {
    id: 9063,
    name: "loan origination"
  },
  {
    id: 9064,
    name: "loan servicing"
  },
  {
    id: 9065,
    name: "local database"
  },
  {
    id: 9066,
    name: "local host"
  },
  {
    id: 9067,
    name: "localization testing"
  },
  {
    id: 9068,
    name: "localizeable strings"
  },
  {
    id: 9069,
    name: "localytics"
  },
  {
    id: 9070,
    name: "location"
  },
  {
    id: 9071,
    name: "lock"
  },
  {
    id: 9072,
    name: "log4j"
  },
  {
    id: 9073,
    name: "logback"
  },
  {
    id: 9074,
    name: "logdna"
  },
  {
    id: 9075,
    name: "loggly"
  },
  {
    id: 9076,
    name: "logicmonitor"
  },
  {
    id: 9077,
    name: "logistic regression"
  },
  {
    id: 9078,
    name: "logistics"
  },
  {
    id: 9079,
    name: "logo"
  },
  {
    id: 9080,
    name: "logs management"
  },
  {
    id: 9081,
    name: "logstash"
  },
  {
    id: 9082,
    name: "loopy belief propagation"
  },
  {
    id: 9083,
    name: "loss function"
  },
  {
    id: 9084,
    name: "lstm"
  },
  {
    id: 9085,
    name: "lte"
  },
  {
    id: 9086,
    name: "lwan"
  },
  {
    id: 9087,
    name: "lxc"
  },
  {
    id: 9088,
    name: "mac os"
  },
  {
    id: 9089,
    name: "mac os x"
  },
  {
    id: 9090,
    name: "machine learning"
  },
  {
    id: 9091,
    name: "machine translations"
  },
  {
    id: 9092,
    name: "macos"
  },
  {
    id: 9093,
    name: "magento"
  },
  {
    id: 9094,
    name: "magic-xpa"
  },
  {
    id: 9095,
    name: "maintaining"
  },
  {
    id: 9096,
    name: "maintenance"
  },
  {
    id: 9097,
    name: "manage servers"
  },
  {
    id: 9098,
    name: "management"
  },
  {
    id: 9099,
    name: "management consulting"
  },
  {
    id: 9100,
    name: "management lead"
  },
  {
    id: 9101,
    name: "management reporting"
  },
  {
    id: 9102,
    name: "manager quality assurance"
  },
  {
    id: 9103,
    name: "manager technology"
  },
  {
    id: 9104,
    name: "manual test"
  },
  {
    id: 9105,
    name: "manufacturing"
  },
  {
    id: 9106,
    name: "marginals"
  },
  {
    id: 9107,
    name: "mariadb"
  },
  {
    id: 9108,
    name: "market analysis"
  },
  {
    id: 9109,
    name: "market assessment"
  },
  {
    id: 9110,
    name: "market intelligence"
  },
  {
    id: 9111,
    name: "market research"
  },
  {
    id: 9112,
    name: "market risk"
  },
  {
    id: 9113,
    name: "marketing"
  },
  {
    id: 9114,
    name: "marketing support"
  },
  {
    id: 9115,
    name: "markov"
  },
  {
    id: 9116,
    name: "markov chain"
  },
  {
    id: 9117,
    name: "marmalade"
  },
  {
    id: 9118,
    name: "material design"
  },
  {
    id: 9119,
    name: "material ui"
  },
  {
    id: 9120,
    name: "materialize"
  },
  {
    id: 9121,
    name: "materialize css"
  },
  {
    id: 9122,
    name: "materialui"
  },
  {
    id: 9123,
    name: "math"
  },
  {
    id: 9124,
    name: "maths"
  },
  {
    id: 9125,
    name: "matomo"
  },
  {
    id: 9126,
    name: "matplotlib"
  },
  {
    id: 9127,
    name: "matrices"
  },
  {
    id: 9128,
    name: "matrix"
  },
  {
    id: 9129,
    name: "maven"
  },
  {
    id: 9130,
    name: "maximum entropy models"
  },
  {
    id: 9131,
    name: "maximum likelihood estimation"
  },
  {
    id: 9132,
    name: "maya"
  },
  {
    id: 9133,
    name: "mba"
  },
  {
    id: 9134,
    name: "mcmc"
  },
  {
    id: 9135,
    name: "mcv"
  },
  {
    id: 9136,
    name: "md5"
  },
  {
    id: 9137,
    name: "mean shift"
  },
  {
    id: 9138,
    name: "mean stack"
  },
  {
    id: 9139,
    name: "media"
  },
  {
    id: 9140,
    name: "media recorder"
  },
  {
    id: 9141,
    name: "media temple"
  },
  {
    id: 9142,
    name: "median"
  },
  {
    id: 9143,
    name: "mediaplayer"
  },
  {
    id: 9144,
    name: "melonjs"
  },
  {
    id: 9145,
    name: "memcached"
  },
  {
    id: 9146,
    name: "memcachier"
  },
  {
    id: 9147,
    name: "memory leaks"
  },
  {
    id: 9148,
    name: "memory management"
  },
  {
    id: 9149,
    name: "memory usage"
  },
  {
    id: 9150,
    name: "memsql"
  },
  {
    id: 9151,
    name: "mendix"
  },
  {
    id: 9152,
    name: "merge sort"
  },
  {
    id: 9153,
    name: "mern stack"
  },
  {
    id: 9154,
    name: "mesos"
  },
  {
    id: 9155,
    name: "message passing algorithm"
  },
  {
    id: 9156,
    name: "message-db"
  },
  {
    id: 9157,
    name: "metabase"
  },
  {
    id: 9158,
    name: "meteor galaxy"
  },
  {
    id: 9159,
    name: "meteorjs"
  },
  {
    id: 9160,
    name: "methodologies"
  },
  {
    id: 9161,
    name: "metrics"
  },
  {
    id: 9162,
    name: "metrics analysis"
  },
  {
    id: 9163,
    name: "microservices"
  },
  {
    id: 9164,
    name: "microsoft azure"
  },
  {
    id: 9165,
    name: "microsoft azure sql database"
  },
  {
    id: 9166,
    name: "microsoft iis"
  },
  {
    id: 9167,
    name: "microsoft planner"
  },
  {
    id: 9168,
    name: "microsoft project"
  },
  {
    id: 9169,
    name: "microsoft sql server"
  },
  {
    id: 9170,
    name: "microsoft ssrs"
  },
  {
    id: 9171,
    name: "microsoft uwp"
  },
  {
    id: 9172,
    name: "mipmap"
  },
  {
    id: 9173,
    name: "mixpanel"
  },
  {
    id: 9174,
    name: "ml kit"
  },
  {
    id: 9175,
    name: "mlflow"
  },
  {
    id: 9176,
    name: "mnemonics"
  },
  {
    id: 9177,
    name: "mo cap"
  },
  {
    id: 9178,
    name: "mobifone"
  },
  {
    id: 9179,
    name: "mobile"
  },
  {
    id: 9180,
    name: "mobile app"
  },
  {
    id: 9181,
    name: "mobile applications"
  },
  {
    id: 9182,
    name: "mobile banking"
  },
  {
    id: 9183,
    name: "mobile human interface guideline"
  },
  {
    id: 9184,
    name: "mobile product"
  },
  {
    id: 9185,
    name: "mobile testing"
  },
  {
    id: 9186,
    name: "mobx"
  },
  {
    id: 9187,
    name: "mocha"
  },
  {
    id: 9188,
    name: "mock up"
  },
  {
    id: 9189,
    name: "mockito"
  },
  {
    id: 9190,
    name: "mocks"
  },
  {
    id: 9191,
    name: "mode"
  },
  {
    id: 9192,
    name: "model optimization"
  },
  {
    id: 9193,
    name: "models"
  },
  {
    id: 9194,
    name: "modernizr"
  },
  {
    id: 9195,
    name: "moengage"
  },
  {
    id: 9196,
    name: "momentum"
  },
  {
    id: 9197,
    name: "money tour"
  },
  {
    id: 9198,
    name: "mongo"
  },
  {
    id: 9199,
    name: "mongodb"
  },
  {
    id: 9200,
    name: "mongodb atlas"
  },
  {
    id: 9201,
    name: "mongodb stitch"
  },
  {
    id: 9202,
    name: "mongoose"
  },
  {
    id: 9203,
    name: "mongoose web server"
  },
  {
    id: 9204,
    name: "monit"
  },
  {
    id: 9205,
    name: "monitoring"
  },
  {
    id: 9206,
    name: "monkeyrunner"
  },
  {
    id: 9207,
    name: "monkeytalk"
  },
  {
    id: 9208,
    name: "monogame"
  },
  {
    id: 9209,
    name: "monto carlo method"
  },
  {
    id: 9210,
    name: "mordern css"
  },
  {
    id: 9211,
    name: "mortgage"
  },
  {
    id: 9212,
    name: "moshi"
  },
  {
    id: 9213,
    name: "motion"
  },
  {
    id: 9214,
    name: "motion capturers"
  },
  {
    id: 9215,
    name: "motivation"
  },
  {
    id: 9216,
    name: "ms"
  },
  {
    id: 9217,
    name: "ms excel"
  },
  {
    id: 9218,
    name: "ms office"
  },
  {
    id: 9219,
    name: "ms project"
  },
  {
    id: 9220,
    name: "ms sql server"
  },
  {
    id: 9221,
    name: "ms visio"
  },
  {
    id: 9222,
    name: "ms word"
  },
  {
    id: 9223,
    name: "mssql"
  },
  {
    id: 9224,
    name: "multimedia components"
  },
  {
    id: 9225,
    name: "multinomial"
  },
  {
    id: 9226,
    name: "multitask learning"
  },
  {
    id: 9227,
    name: "multithread programming"
  },
  {
    id: 9228,
    name: "multithreading"
  },
  {
    id: 9229,
    name: "multithreading and concurrency"
  },
  {
    id: 9230,
    name: "murex"
  },
  {
    id: 9231,
    name: "music composer"
  },
  {
    id: 9232,
    name: "mvc"
  },
  {
    id: 9233,
    name: "mvi"
  },
  {
    id: 9234,
    name: "mvp"
  },
  {
    id: 9235,
    name: "mvvm"
  },
  {
    id: 9236,
    name: "mysql"
  },
  {
    id: 9237,
    name: "mysql workbench"
  },
  {
    id: 9238,
    name: "n+1 problem"
  },
  {
    id: 9239,
    name: "n-gram language models"
  },
  {
    id: 9240,
    name: "nachos-ui"
  },
  {
    id: 9241,
    name: "nadam"
  },
  {
    id: 9242,
    name: "nagios"
  },
  {
    id: 9243,
    name: "naive bayes"
  },
  {
    id: 9244,
    name: "name entity recognition"
  },
  {
    id: 9245,
    name: "namecheap"
  },
  {
    id: 9246,
    name: "nanobox"
  },
  {
    id: 9247,
    name: "native-navigation"
  },
  {
    id: 9248,
    name: "nats"
  },
  {
    id: 9249,
    name: "natural language generation"
  },
  {
    id: 9250,
    name: "natural language processing"
  },
  {
    id: 9251,
    name: "natural language questions"
  },
  {
    id: 9252,
    name: "navigation"
  },
  {
    id: 9253,
    name: "neat"
  },
  {
    id: 9254,
    name: "negotiation"
  },
  {
    id: 9255,
    name: "neo4j"
  },
  {
    id: 9256,
    name: "nestjs"
  },
  {
    id: 9257,
    name: "netbsd"
  },
  {
    id: 9258,
    name: "netc"
  },
  {
    id: 9259,
    name: "netdata"
  },
  {
    id: 9260,
    name: "netlify"
  },
  {
    id: 9261,
    name: "network"
  },
  {
    id: 9262,
    name: "network handling"
  },
  {
    id: 9263,
    name: "network maintenance"
  },
  {
    id: 9264,
    name: "network providers"
  },
  {
    id: 9265,
    name: "networking"
  },
  {
    id: 9266,
    name: "networking concepts"
  },
  {
    id: 9267,
    name: "networks"
  },
  {
    id: 9268,
    name: "neural architecture search"
  },
  {
    id: 9269,
    name: "neural network"
  },
  {
    id: 9270,
    name: "neural networks"
  },
  {
    id: 9271,
    name: "new relic"
  },
  {
    id: 9272,
    name: "nextjs"
  },
  {
    id: 9273,
    name: "nfc"
  },
  {
    id: 9274,
    name: "nginx"
  },
  {
    id: 9275,
    name: "nginx unit"
  },
  {
    id: 9276,
    name: "nimbella"
  },
  {
    id: 9277,
    name: "nlp"
  },
  {
    id: 9278,
    name: "nltk"
  },
  {
    id: 9279,
    name: "nmf"
  },
  {
    id: 9280,
    name: "nodaljs"
  },
  {
    id: 9281,
    name: "node"
  },
  {
    id: 9282,
    name: "node.js"
  },
  {
    id: 9283,
    name: "nodes"
  },
  {
    id: 9284,
    name: "nomad"
  },
  {
    id: 9285,
    name: "non functional testing"
  },
  {
    id: 9286,
    name: "normalization"
  },
  {
    id: 9287,
    name: "nosql"
  },
  {
    id: 9288,
    name: "notification channels"
  },
  {
    id: 9289,
    name: "notifications"
  },
  {
    id: 9290,
    name: "npm"
  },
  {
    id: 9291,
    name: "nslock"
  },
  {
    id: 9292,
    name: "nsoperation"
  },
  {
    id: 9293,
    name: "nspec"
  },
  {
    id: 9294,
    name: "nuget"
  },
  {
    id: 9295,
    name: "numerosity reduction"
  },
  {
    id: 9296,
    name: "numpy"
  },
  {
    id: 9297,
    name: "nuxt"
  },
  {
    id: 9298,
    name: "oauth2"
  },
  {
    id: 9299,
    name: "object animator"
  },
  {
    id: 9300,
    name: "object recognition"
  },
  {
    id: 9301,
    name: "objective c"
  },
  {
    id: 9302,
    name: "objective-c"
  },
  {
    id: 9303,
    name: "observing"
  },
  {
    id: 9304,
    name: "obsessive compulsive tour"
  },
  {
    id: 9305,
    name: "obtain test"
  },
  {
    id: 9306,
    name: "obviously"
  },
  {
    id: 9307,
    name: "octohost"
  },
  {
    id: 9308,
    name: "octopus deploy"
  },
  {
    id: 9309,
    name: "odm"
  },
  {
    id: 9310,
    name: "omniauth"
  },
  {
    id: 9311,
    name: "online banking"
  },
  {
    id: 9312,
    name: "online bidding"
  },
  {
    id: 9313,
    name: "ooad"
  },
  {
    id: 9314,
    name: "oocss"
  },
  {
    id: 9315,
    name: "ood"
  },
  {
    id: 9316,
    name: "oop"
  },
  {
    id: 9317,
    name: "open project"
  },
  {
    id: 9318,
    name: "open telekom cloud"
  },
  {
    id: 9319,
    name: "openbsd"
  },
  {
    id: 9320,
    name: "openfaas"
  },
  {
    id: 9321,
    name: "openid"
  },
  {
    id: 9322,
    name: "openresty"
  },
  {
    id: 9323,
    name: "openshift"
  },
  {
    id: 9324,
    name: "openssl"
  },
  {
    id: 9325,
    name: "opentracing"
  },
  {
    id: 9326,
    name: "openvpn"
  },
  {
    id: 9327,
    name: "operating system"
  },
  {
    id: 9328,
    name: "operating system versions"
  },
  {
    id: 9329,
    name: "operating systems"
  },
  {
    id: 9330,
    name: "operation"
  },
  {
    id: 9331,
    name: "operation system"
  },
  {
    id: 9332,
    name: "operational risk"
  },
  {
    id: 9333,
    name: "operational testing"
  },
  {
    id: 9334,
    name: "operations"
  },
  {
    id: 9335,
    name: "operations leadership"
  },
  {
    id: 9336,
    name: "operations management"
  },
  {
    id: 9337,
    name: "opsstack"
  },
  {
    id: 9338,
    name: "optics"
  },
  {
    id: 9339,
    name: "optimization"
  },
  {
    id: 9340,
    name: "optimizely"
  },
  {
    id: 9341,
    name: "optimizers"
  },
  {
    id: 9342,
    name: "oracle"
  },
  {
    id: 9343,
    name: "oracle weblogic server"
  },
  {
    id: 9344,
    name: "organization"
  },
  {
    id: 9345,
    name: "organizational development"
  },
  {
    id: 9346,
    name: "organizational skills"
  },
  {
    id: 9347,
    name: "orm"
  },
  {
    id: 9348,
    name: "osawp"
  },
  {
    id: 9349,
    name: "osi model"
  },
  {
    id: 9350,
    name: "overfitting"
  },
  {
    id: 9351,
    name: "paas"
  },
  {
    id: 9352,
    name: "package manager"
  },
  {
    id: 9353,
    name: "pagerduty"
  },
  {
    id: 9354,
    name: "paging library"
  },
  {
    id: 9355,
    name: "panda3d"
  },
  {
    id: 9356,
    name: "pandas"
  },
  {
    id: 9357,
    name: "panelbear"
  },
  {
    id: 9358,
    name: "papertrail"
  },
  {
    id: 9359,
    name: "parameter penalties"
  },
  {
    id: 9360,
    name: "parcel"
  },
  {
    id: 9361,
    name: "parse server"
  },
  {
    id: 9362,
    name: "parse tree"
  },
  {
    id: 9363,
    name: "parsely"
  },
  {
    id: 9364,
    name: "parsing algorthm"
  },
  {
    id: 9365,
    name: "part of speech"
  },
  {
    id: 9366,
    name: "partial"
  },
  {
    id: 9367,
    name: "particles"
  },
  {
    id: 9368,
    name: "passage retrieval"
  },
  {
    id: 9369,
    name: "passion"
  },
  {
    id: 9370,
    name: "pattern recognition"
  },
  {
    id: 9371,
    name: "payara"
  },
  {
    id: 9372,
    name: "payment gateways"
  },
  {
    id: 9373,
    name: "payments"
  },
  {
    id: 9374,
    name: "pca"
  },
  {
    id: 9375,
    name: "pcloudy"
  },
  {
    id: 9376,
    name: "percentile"
  },
  {
    id: 9377,
    name: "perfecto"
  },
  {
    id: 9378,
    name: "performance"
  },
  {
    id: 9379,
    name: "performance metrics"
  },
  {
    id: 9380,
    name: "performance monitoring"
  },
  {
    id: 9381,
    name: "performance testing"
  },
  {
    id: 9382,
    name: "periscope data"
  },
  {
    id: 9383,
    name: "perl"
  },
  {
    id: 9384,
    name: "permissions"
  },
  {
    id: 9385,
    name: "persistence"
  },
  {
    id: 9386,
    name: "persistency"
  },
  {
    id: 9387,
    name: "pesticide paradox"
  },
  {
    id: 9388,
    name: "phabricator"
  },
  {
    id: 9389,
    name: "phalcon"
  },
  {
    id: 9390,
    name: "phaserjs"
  },
  {
    id: 9391,
    name: "phoenix"
  },
  {
    id: 9392,
    name: "php"
  },
  {
    id: 9393,
    name: "phpmyadmin"
  },
  {
    id: 9394,
    name: "phpstan"
  },
  {
    id: 9395,
    name: "phpunit"
  },
  {
    id: 9396,
    name: "physics"
  },
  {
    id: 9397,
    name: "physicsjs"
  },
  {
    id: 9398,
    name: "picasso"
  },
  {
    id: 9399,
    name: "pickers"
  },
  {
    id: 9400,
    name: "pingdom"
  },
  {
    id: 9401,
    name: "pip"
  },
  {
    id: 9402,
    name: "pivotal web services"
  },
  {
    id: 9403,
    name: "piwik"
  },
  {
    id: 9404,
    name: "pixijs"
  },
  {
    id: 9405,
    name: "planning"
  },
  {
    id: 9406,
    name: "platform"
  },
  {
    id: 9407,
    name: "platforms"
  },
  {
    id: 9408,
    name: "play framework"
  },
  {
    id: 9409,
    name: "play store"
  },
  {
    id: 9410,
    name: "playcanvas"
  },
  {
    id: 9411,
    name: "playfab"
  },
  {
    id: 9412,
    name: "playground"
  },
  {
    id: 9413,
    name: "plesk"
  },
  {
    id: 9414,
    name: "plist"
  },
  {
    id: 9415,
    name: "plotnine"
  },
  {
    id: 9416,
    name: "point of sale"
  },
  {
    id: 9417,
    name: "poisson"
  },
  {
    id: 9418,
    name: "poisson regression"
  },
  {
    id: 9419,
    name: "policy iteration"
  },
  {
    id: 9420,
    name: "policy knowledge"
  },
  {
    id: 9421,
    name: "pooling"
  },
  {
    id: 9422,
    name: "popcorn metrics"
  },
  {
    id: 9423,
    name: "port"
  },
  {
    id: 9424,
    name: "port forwarding"
  },
  {
    id: 9425,
    name: "portability"
  },
  {
    id: 9426,
    name: "portainer"
  },
  {
    id: 9427,
    name: "portrait"
  },
  {
    id: 9428,
    name: "pos"
  },
  {
    id: 9429,
    name: "pos tagging"
  },
  {
    id: 9430,
    name: "position"
  },
  {
    id: 9431,
    name: "post"
  },
  {
    id: 9432,
    name: "postcss"
  },
  {
    id: 9433,
    name: "posterior distributions"
  },
  {
    id: 9434,
    name: "postgis"
  },
  {
    id: 9435,
    name: "postgresql"
  },
  {
    id: 9436,
    name: "posthog"
  },
  {
    id: 9437,
    name: "postman"
  },
  {
    id: 9438,
    name: "pouchdb"
  },
  {
    id: 9439,
    name: "power bi"
  },
  {
    id: 9440,
    name: "power bi embedded"
  },
  {
    id: 9441,
    name: "power point presentation"
  },
  {
    id: 9442,
    name: "powerbi"
  },
  {
    id: 9443,
    name: "practitest"
  },
  {
    id: 9444,
    name: "pre visualization"
  },
  {
    id: 9445,
    name: "pre viz artist"
  },
  {
    id: 9446,
    name: "pre-commit"
  },
  {
    id: 9447,
    name: "preact"
  },
  {
    id: 9448,
    name: "precision"
  },
  {
    id: 9449,
    name: "predictive distributions"
  },
  {
    id: 9450,
    name: "predictive maintenance"
  },
  {
    id: 9451,
    name: "predictleads"
  },
  {
    id: 9452,
    name: "prepaid cards"
  },
  {
    id: 9453,
    name: "preparation test scenarios"
  },
  {
    id: 9454,
    name: "presales"
  },
  {
    id: 9455,
    name: "presentation"
  },
  {
    id: 9456,
    name: "presentation skills"
  },
  {
    id: 9457,
    name: "prettier"
  },
  {
    id: 9458,
    name: "preventive maintenance"
  },
  {
    id: 9459,
    name: "primary key"
  },
  {
    id: 9460,
    name: "principal component analysis"
  },
  {
    id: 9461,
    name: "printing"
  },
  {
    id: 9462,
    name: "prior distribution"
  },
  {
    id: 9463,
    name: "prisma cloud"
  },
  {
    id: 9464,
    name: "probabilistic graphical models"
  },
  {
    id: 9465,
    name: "probabilistic models"
  },
  {
    id: 9466,
    name: "probability distribution"
  },
  {
    id: 9467,
    name: "probability theory"
  },
  {
    id: 9468,
    name: "problem solving"
  },
  {
    id: 9469,
    name: "procedures"
  },
  {
    id: 9470,
    name: "process definition"
  },
  {
    id: 9471,
    name: "process flow"
  },
  {
    id: 9472,
    name: "process improvement"
  },
  {
    id: 9473,
    name: "process management"
  },
  {
    id: 9474,
    name: "process mapping"
  },
  {
    id: 9475,
    name: "process monitoring"
  },
  {
    id: 9476,
    name: "process re-engineering"
  },
  {
    id: 9477,
    name: "process study"
  },
  {
    id: 9478,
    name: "process transition"
  },
  {
    id: 9479,
    name: "processes"
  },
  {
    id: 9480,
    name: "product"
  },
  {
    id: 9481,
    name: "product design"
  },
  {
    id: 9482,
    name: "product development"
  },
  {
    id: 9483,
    name: "product handling"
  },
  {
    id: 9484,
    name: "product life cycle management"
  },
  {
    id: 9485,
    name: "product management"
  },
  {
    id: 9486,
    name: "product manager"
  },
  {
    id: 9487,
    name: "product owner"
  },
  {
    id: 9488,
    name: "product owners"
  },
  {
    id: 9489,
    name: "product research"
  },
  {
    id: 9490,
    name: "product type"
  },
  {
    id: 9491,
    name: "production"
  },
  {
    id: 9492,
    name: "production staff"
  },
  {
    id: 9493,
    name: "program management"
  },
  {
    id: 9494,
    name: "programming"
  },
  {
    id: 9495,
    name: "programming language"
  },
  {
    id: 9496,
    name: "programming languages"
  },
  {
    id: 9497,
    name: "programming languagues"
  },
  {
    id: 9498,
    name: "programming languge"
  },
  {
    id: 9499,
    name: "programming paradigm"
  },
  {
    id: 9500,
    name: "progress bar"
  },
  {
    id: 9501,
    name: "progressive"
  },
  {
    id: 9502,
    name: "proguard"
  },
  {
    id: 9503,
    name: "project"
  },
  {
    id: 9504,
    name: "project accounting"
  },
  {
    id: 9505,
    name: "project billing schedules maintenance"
  },
  {
    id: 9506,
    name: "project coordination"
  },
  {
    id: 9507,
    name: "project coordinator"
  },
  {
    id: 9508,
    name: "project delivery"
  },
  {
    id: 9509,
    name: "project documentation"
  },
  {
    id: 9510,
    name: "project estimation"
  },
  {
    id: 9511,
    name: "project handling"
  },
  {
    id: 9512,
    name: "project leadership"
  },
  {
    id: 9513,
    name: "project management"
  },
  {
    id: 9514,
    name: "project manager"
  },
  {
    id: 9515,
    name: "project planning"
  },
  {
    id: 9516,
    name: "project scheduling"
  },
  {
    id: 9517,
    name: "project type"
  },
  {
    id: 9518,
    name: "prometheus"
  },
  {
    id: 9519,
    name: "proposal management"
  },
  {
    id: 9520,
    name: "proposal writing"
  },
  {
    id: 9521,
    name: "protocol"
  },
  {
    id: 9522,
    name: "protocol buffer"
  },
  {
    id: 9523,
    name: "protocol-oriented programming"
  },
  {
    id: 9524,
    name: "protocols"
  },
  {
    id: 9525,
    name: "prototype"
  },
  {
    id: 9526,
    name: "prototype design"
  },
  {
    id: 9527,
    name: "prototyping"
  },
  {
    id: 9528,
    name: "protractor"
  },
  {
    id: 9529,
    name: "prpl pattern"
  },
  {
    id: 9530,
    name: "ps vita"
  },
  {
    id: 9531,
    name: "public sector"
  },
  {
    id: 9532,
    name: "pubnub"
  },
  {
    id: 9533,
    name: "pulumi"
  },
  {
    id: 9534,
    name: "puppet"
  },
  {
    id: 9535,
    name: "puppeteer"
  },
  {
    id: 9536,
    name: "pusher"
  },
  {
    id: 9537,
    name: "put"
  },
  {
    id: 9538,
    name: "pwa"
  },
  {
    id: 9539,
    name: "pygame"
  },
  {
    id: 9540,
    name: "pyglet"
  },
  {
    id: 9541,
    name: "pykyra"
  },
  {
    id: 9542,
    name: "pyopengl"
  },
  {
    id: 9543,
    name: "pyramid"
  },
  {
    id: 9544,
    name: "pytest"
  },
  {
    id: 9545,
    name: "pytest bdd"
  },
  {
    id: 9546,
    name: "python"
  },
  {
    id: 9547,
    name: "python framework"
  },
  {
    id: 9548,
    name: "python ogre"
  },
  {
    id: 9549,
    name: "pythonanywhere"
  },
  {
    id: 9550,
    name: "pytorch"
  },
  {
    id: 9551,
    name: "q-learning"
  },
  {
    id: 9552,
    name: "qa"
  },
  {
    id: 9553,
    name: "qa system"
  },
  {
    id: 9554,
    name: "qacoverage"
  },
  {
    id: 9555,
    name: "qase"
  },
  {
    id: 9556,
    name: "qc"
  },
  {
    id: 9557,
    name: "qlik"
  },
  {
    id: 9558,
    name: "qlik sense"
  },
  {
    id: 9559,
    name: "qlikview"
  },
  {
    id: 9560,
    name: "qrvey analytics"
  },
  {
    id: 9561,
    name: "qtest"
  },
  {
    id: 9562,
    name: "quality assurance"
  },
  {
    id: 9563,
    name: "quality standards"
  },
  {
    id: 9564,
    name: "quantcast"
  },
  {
    id: 9565,
    name: "quantile"
  },
  {
    id: 9566,
    name: "quantity strings"
  },
  {
    id: 9567,
    name: "quantization"
  },
  {
    id: 9568,
    name: "quartile"
  },
  {
    id: 9569,
    name: "query"
  },
  {
    id: 9570,
    name: "question answering"
  },
  {
    id: 9571,
    name: "question classification"
  },
  {
    id: 9572,
    name: "queue"
  },
  {
    id: 9573,
    name: "quick sort"
  },
  {
    id: 9574,
    name: "quickmetrics"
  },
  {
    id: 9575,
    name: "quilljs"
  },
  {
    id: 9576,
    name: "qunit"
  },
  {
    id: 9577,
    name: "r"
  },
  {
    id: 9578,
    name: "r8"
  },
  {
    id: 9579,
    name: "rabbitmq"
  },
  {
    id: 9580,
    name: "rackspace cloud servers"
  },
  {
    id: 9581,
    name: "radish"
  },
  {
    id: 9582,
    name: "radium"
  },
  {
    id: 9583,
    name: "rail model"
  },
  {
    id: 9584,
    name: "rails"
  },
  {
    id: 9585,
    name: "rails spring"
  },
  {
    id: 9586,
    name: "rained out tour"
  },
  {
    id: 9587,
    name: "rakam"
  },
  {
    id: 9588,
    name: "ramnode"
  },
  {
    id: 9589,
    name: "rancher"
  },
  {
    id: 9590,
    name: "rancheros"
  },
  {
    id: 9591,
    name: "random forest"
  },
  {
    id: 9592,
    name: "random projection"
  },
  {
    id: 9593,
    name: "random sample"
  },
  {
    id: 9594,
    name: "random variable"
  },
  {
    id: 9595,
    name: "randomness"
  },
  {
    id: 9596,
    name: "ratchet"
  },
  {
    id: 9597,
    name: "ratchet php"
  },
  {
    id: 9598,
    name: "ravendb"
  },
  {
    id: 9599,
    name: "raygun"
  },
  {
    id: 9600,
    name: "rca"
  },
  {
    id: 9601,
    name: "reacjs"
  },
  {
    id: 9602,
    name: "react"
  },
  {
    id: 9603,
    name: "react hook"
  },
  {
    id: 9604,
    name: "react native"
  },
  {
    id: 9605,
    name: "react native firebase"
  },
  {
    id: 9606,
    name: "react testing library"
  },
  {
    id: 9607,
    name: "react-native-material-design"
  },
  {
    id: 9608,
    name: "react-native-paper"
  },
  {
    id: 9609,
    name: "react-native-ui-kitten"
  },
  {
    id: 9610,
    name: "react-navigation"
  },
  {
    id: 9611,
    name: "react-testing-library"
  },
  {
    id: 9612,
    name: "react-virgin"
  },
  {
    id: 9613,
    name: "reactive programming"
  },
  {
    id: 9614,
    name: "reactivecocoa"
  },
  {
    id: 9615,
    name: "reactnativeautoupdater"
  },
  {
    id: 9616,
    name: "reactphp"
  },
  {
    id: 9617,
    name: "reactstrap"
  },
  {
    id: 9618,
    name: "reagent"
  },
  {
    id: 9619,
    name: "realm"
  },
  {
    id: 9620,
    name: "recall"
  },
  {
    id: 9621,
    name: "record"
  },
  {
    id: 9622,
    name: "record maintenance"
  },
  {
    id: 9623,
    name: "recovery testing"
  },
  {
    id: 9624,
    name: "recurrent neural network"
  },
  {
    id: 9625,
    name: "recursion"
  },
  {
    id: 9626,
    name: "recycler view"
  },
  {
    id: 9627,
    name: "red hat"
  },
  {
    id: 9628,
    name: "red hat openshift"
  },
  {
    id: 9629,
    name: "redash"
  },
  {
    id: 9630,
    name: "redis"
  },
  {
    id: 9631,
    name: "redux"
  },
  {
    id: 9632,
    name: "redux persist"
  },
  {
    id: 9633,
    name: "redux-saga"
  },
  {
    id: 9634,
    name: "redux-thunk"
  },
  {
    id: 9635,
    name: "refactoring"
  },
  {
    id: 9636,
    name: "reference type"
  },
  {
    id: 9637,
    name: "regression"
  },
  {
    id: 9638,
    name: "regression testing"
  },
  {
    id: 9639,
    name: "regular expression"
  },
  {
    id: 9640,
    name: "regulatory reporting"
  },
  {
    id: 9641,
    name: "regulization"
  },
  {
    id: 9642,
    name: "reinforment learning"
  },
  {
    id: 9643,
    name: "relation extraction"
  },
  {
    id: 9644,
    name: "relative layout"
  },
  {
    id: 9645,
    name: "relay modern"
  },
  {
    id: 9646,
    name: "relevance models"
  },
  {
    id: 9647,
    name: "reliability"
  },
  {
    id: 9648,
    name: "reliability testing"
  },
  {
    id: 9649,
    name: "remote config"
  },
  {
    id: 9650,
    name: "remote support"
  },
  {
    id: 9651,
    name: "ren'py"
  },
  {
    id: 9652,
    name: "rendering"
  },
  {
    id: 9653,
    name: "renpy"
  },
  {
    id: 9654,
    name: "replay"
  },
  {
    id: 9655,
    name: "replication logging"
  },
  {
    id: 9656,
    name: "replit"
  },
  {
    id: 9657,
    name: "report generation"
  },
  {
    id: 9658,
    name: "reporting"
  },
  {
    id: 9659,
    name: "reporting skills"
  },
  {
    id: 9660,
    name: "reqtest"
  },
  {
    id: 9661,
    name: "requirejs"
  },
  {
    id: 9662,
    name: "requirement"
  },
  {
    id: 9663,
    name: "requirement analysis"
  },
  {
    id: 9664,
    name: "requirement gathering"
  },
  {
    id: 9665,
    name: "requirement planning"
  },
  {
    id: 9666,
    name: "requirements"
  },
  {
    id: 9667,
    name: "requirements management"
  },
  {
    id: 9668,
    name: "research"
  },
  {
    id: 9669,
    name: "research analyst"
  },
  {
    id: 9670,
    name: "research skills"
  },
  {
    id: 9671,
    name: "residual connections"
  },
  {
    id: 9672,
    name: "resource analyst"
  },
  {
    id: 9673,
    name: "resource management"
  },
  {
    id: 9674,
    name: "resource planning"
  },
  {
    id: 9675,
    name: "resources"
  },
  {
    id: 9676,
    name: "resourcing"
  },
  {
    id: 9677,
    name: "responsive"
  },
  {
    id: 9678,
    name: "rest"
  },
  {
    id: 9679,
    name: "rest api"
  },
  {
    id: 9680,
    name: "restful"
  },
  {
    id: 9681,
    name: "restful webservices"
  },
  {
    id: 9682,
    name: "retain cycles"
  },
  {
    id: 9683,
    name: "retest all"
  },
  {
    id: 9684,
    name: "retesting"
  },
  {
    id: 9685,
    name: "rethinkdb"
  },
  {
    id: 9686,
    name: "retrofit"
  },
  {
    id: 9687,
    name: "reuseability"
  },
  {
    id: 9688,
    name: "reverse"
  },
  {
    id: 9689,
    name: "reverse proxy"
  },
  {
    id: 9690,
    name: "review guideline"
  },
  {
    id: 9691,
    name: "reward function"
  },
  {
    id: 9692,
    name: "rfp"
  },
  {
    id: 9693,
    name: "rfq"
  },
  {
    id: 9694,
    name: "rhel"
  },
  {
    id: 9695,
    name: "rhodecode"
  },
  {
    id: 9696,
    name: "rigger"
  },
  {
    id: 9697,
    name: "risk analytics"
  },
  {
    id: 9698,
    name: "risk assessment"
  },
  {
    id: 9699,
    name: "risk control"
  },
  {
    id: 9700,
    name: "risk governance"
  },
  {
    id: 9701,
    name: "risk identification"
  },
  {
    id: 9702,
    name: "risk management"
  },
  {
    id: 9703,
    name: "risk management tracking"
  },
  {
    id: 9704,
    name: "risk mitigation"
  },
  {
    id: 9705,
    name: "risk modeling"
  },
  {
    id: 9706,
    name: "risks able to recognition"
  },
  {
    id: 9707,
    name: "rjmetrics"
  },
  {
    id: 9708,
    name: "rmsprop"
  },
  {
    id: 9709,
    name: "rnn"
  },
  {
    id: 9710,
    name: "road map creation"
  },
  {
    id: 9711,
    name: "roadmap creation"
  },
  {
    id: 9712,
    name: "robolectric"
  },
  {
    id: 9713,
    name: "robot framework"
  },
  {
    id: 9714,
    name: "robotium"
  },
  {
    id: 9715,
    name: "rollbar"
  },
  {
    id: 9716,
    name: "rollup"
  },
  {
    id: 9717,
    name: "room"
  },
  {
    id: 9718,
    name: "rpg maker"
  },
  {
    id: 9719,
    name: "rspec"
  },
  {
    id: 9720,
    name: "ruby"
  },
  {
    id: 9721,
    name: "ruby on rails"
  },
  {
    id: 9722,
    name: "runloop"
  },
  {
    id: 9723,
    name: "runtime"
  },
  {
    id: 9724,
    name: "rust"
  },
  {
    id: 9725,
    name: "rxswift"
  },
  {
    id: 9726,
    name: "saas"
  },
  {
    id: 9727,
    name: "sailsjs"
  },
  {
    id: 9728,
    name: "sales"
  },
  {
    id: 9729,
    name: "sales process"
  },
  {
    id: 9730,
    name: "sales support"
  },
  {
    id: 9731,
    name: "salesforce"
  },
  {
    id: 9732,
    name: "salt"
  },
  {
    id: 9733,
    name: "salt stack"
  },
  {
    id: 9734,
    name: "saml"
  },
  {
    id: 9735,
    name: "sandwich"
  },
  {
    id: 9736,
    name: "sanitizer"
  },
  {
    id: 9737,
    name: "sanity test"
  },
  {
    id: 9738,
    name: "sap crystal reports"
  },
  {
    id: 9739,
    name: "sass"
  },
  {
    id: 9740,
    name: "sauce labs"
  },
  {
    id: 9741,
    name: "scala"
  },
  {
    id: 9742,
    name: "scalability"
  },
  {
    id: 9743,
    name: "scalars"
  },
  {
    id: 9744,
    name: "scaleway"
  },
  {
    id: 9745,
    name: "scheduling"
  },
  {
    id: 9746,
    name: "scheme"
  },
  {
    id: 9747,
    name: "scikit-learn"
  },
  {
    id: 9748,
    name: "scope"
  },
  {
    id: 9749,
    name: "scp"
  },
  {
    id: 9750,
    name: "screen readers"
  },
  {
    id: 9751,
    name: "screen resolution"
  },
  {
    id: 9752,
    name: "scripting"
  },
  {
    id: 9753,
    name: "scripting languages"
  },
  {
    id: 9754,
    name: "scrum"
  },
  {
    id: 9755,
    name: "scrum master"
  },
  {
    id: 9756,
    name: "scrum methodology"
  },
  {
    id: 9757,
    name: "scrypt"
  },
  {
    id: 9758,
    name: "scss"
  },
  {
    id: 9759,
    name: "scss-lint"
  },
  {
    id: 9760,
    name: "sdk manager"
  },
  {
    id: 9761,
    name: "sdlc"
  },
  {
    id: 9762,
    name: "seaborn"
  },
  {
    id: 9763,
    name: "search algorithms"
  },
  {
    id: 9764,
    name: "search engine optimization"
  },
  {
    id: 9765,
    name: "search interface"
  },
  {
    id: 9766,
    name: "secondary action"
  },
  {
    id: 9767,
    name: "security"
  },
  {
    id: 9768,
    name: "security services"
  },
  {
    id: 9769,
    name: "security testing"
  },
  {
    id: 9770,
    name: "seevolution"
  },
  {
    id: 9771,
    name: "segment"
  },
  {
    id: 9772,
    name: "seldon"
  },
  {
    id: 9773,
    name: "selection sort"
  },
  {
    id: 9774,
    name: "selective"
  },
  {
    id: 9775,
    name: "selendroid"
  },
  {
    id: 9776,
    name: "selenide"
  },
  {
    id: 9777,
    name: "selenium"
  },
  {
    id: 9778,
    name: "selenium grid"
  },
  {
    id: 9779,
    name: "selenium ide"
  },
  {
    id: 9780,
    name: "selenium rc"
  },
  {
    id: 9781,
    name: "self learning"
  },
  {
    id: 9782,
    name: "sem"
  },
  {
    id: 9783,
    name: "semantic distance"
  },
  {
    id: 9784,
    name: "semantic html"
  },
  {
    id: 9785,
    name: "semantic similarity"
  },
  {
    id: 9786,
    name: "sematic ui"
  },
  {
    id: 9787,
    name: "senior business analyst"
  },
  {
    id: 9788,
    name: "senior management"
  },
  {
    id: 9789,
    name: "sensor tower"
  },
  {
    id: 9790,
    name: "sensors"
  },
  {
    id: 9791,
    name: "sentence similarity"
  },
  {
    id: 9792,
    name: "sentiment analysis"
  },
  {
    id: 9793,
    name: "sentiment classification"
  },
  {
    id: 9794,
    name: "sentry"
  },
  {
    id: 9795,
    name: "seo"
  },
  {
    id: 9796,
    name: "sepa"
  },
  {
    id: 9797,
    name: "sequelize"
  },
  {
    id: 9798,
    name: "sequence labeling"
  },
  {
    id: 9799,
    name: "sequential decision making"
  },
  {
    id: 9800,
    name: "serialization"
  },
  {
    id: 9801,
    name: "serialize"
  },
  {
    id: 9802,
    name: "series"
  },
  {
    id: 9803,
    name: "serilog"
  },
  {
    id: 9804,
    name: "serps"
  },
  {
    id: 9805,
    name: "server"
  },
  {
    id: 9806,
    name: "serverless"
  },
  {
    id: 9807,
    name: "serverless-dev-tools"
  },
  {
    id: 9808,
    name: "service"
  },
  {
    id: 9809,
    name: "service management"
  },
  {
    id: 9810,
    name: "service workers"
  },
  {
    id: 9811,
    name: "setting up firewall"
  },
  {
    id: 9812,
    name: "settlements"
  },
  {
    id: 9813,
    name: "sftp"
  },
  {
    id: 9814,
    name: "sgd"
  },
  {
    id: 9815,
    name: "sha"
  },
  {
    id: 9816,
    name: "shader programming"
  },
  {
    id: 9817,
    name: "sharding"
  },
  {
    id: 9818,
    name: "shared preferences"
  },
  {
    id: 9819,
    name: "shiny"
  },
  {
    id: 9820,
    name: "shippable"
  },
  {
    id: 9821,
    name: "siamese network"
  },
  {
    id: 9822,
    name: "sidekiq"
  },
  {
    id: 9823,
    name: "signalfx"
  },
  {
    id: 9824,
    name: "signalr"
  },
  {
    id: 9825,
    name: "sikuli"
  },
  {
    id: 9826,
    name: "sim card"
  },
  {
    id: 9827,
    name: "similarweb"
  },
  {
    id: 9828,
    name: "simulator"
  },
  {
    id: 9829,
    name: "simulators"
  },
  {
    id: 9830,
    name: "singlehop"
  },
  {
    id: 9831,
    name: "singleton"
  },
  {
    id: 9832,
    name: "singly list"
  },
  {
    id: 9833,
    name: "sinonjs"
  },
  {
    id: 9834,
    name: "sisense"
  },
  {
    id: 9835,
    name: "siteground"
  },
  {
    id: 9836,
    name: "skaffold"
  },
  {
    id: 9837,
    name: "sketch recognition"
  },
  {
    id: 9838,
    name: "skin detection"
  },
  {
    id: 9839,
    name: "skin-color segmentation"
  },
  {
    id: 9840,
    name: "smacss"
  },
  {
    id: 9841,
    name: "smartlook"
  },
  {
    id: 9842,
    name: "smoke test"
  },
  {
    id: 9843,
    name: "smoke tests"
  },
  {
    id: 9844,
    name: "smtp"
  },
  {
    id: 9845,
    name: "snackbar"
  },
  {
    id: 9846,
    name: "snap-ci"
  },
  {
    id: 9847,
    name: "snowflake"
  },
  {
    id: 9848,
    name: "snyk"
  },
  {
    id: 9849,
    name: "soap"
  },
  {
    id: 9850,
    name: "soapui"
  },
  {
    id: 9851,
    name: "social networking"
  },
  {
    id: 9852,
    name: "socket io"
  },
  {
    id: 9853,
    name: "socketcluster"
  },
  {
    id: 9854,
    name: "sockets"
  },
  {
    id: 9855,
    name: "soft skill"
  },
  {
    id: 9856,
    name: "soft skills"
  },
  {
    id: 9857,
    name: "software"
  },
  {
    id: 9858,
    name: "software architecture"
  },
  {
    id: 9859,
    name: "software development"
  },
  {
    id: 9860,
    name: "software development life cycle"
  },
  {
    id: 9861,
    name: "software engineering"
  },
  {
    id: 9862,
    name: "software sales"
  },
  {
    id: 9863,
    name: "software solutions"
  },
  {
    id: 9864,
    name: "software testing"
  },
  {
    id: 9865,
    name: "solarwinds"
  },
  {
    id: 9866,
    name: "solid drawing"
  },
  {
    id: 9867,
    name: "solution design"
  },
  {
    id: 9868,
    name: "solution implementation"
  },
  {
    id: 9869,
    name: "sony playstation 4"
  },
  {
    id: 9870,
    name: "sort"
  },
  {
    id: 9871,
    name: "sort algorithms"
  },
  {
    id: 9872,
    name: "sound"
  },
  {
    id: 9873,
    name: "sound designer"
  },
  {
    id: 9874,
    name: "sound effect"
  },
  {
    id: 9875,
    name: "source control"
  },
  {
    id: 9876,
    name: "sourcetree"
  },
  {
    id: 9877,
    name: "spa"
  },
  {
    id: 9878,
    name: "spacy"
  },
  {
    id: 9879,
    name: "spans"
  },
  {
    id: 9880,
    name: "spark"
  },
  {
    id: 9881,
    name: "specflow"
  },
  {
    id: 9882,
    name: "special effects"
  },
  {
    id: 9883,
    name: "specification based"
  },
  {
    id: 9884,
    name: "specification guide"
  },
  {
    id: 9885,
    name: "specifications"
  },
  {
    id: 9886,
    name: "speech tranmissions"
  },
  {
    id: 9887,
    name: "speech-to-speech translation"
  },
  {
    id: 9888,
    name: "spike testing"
  },
  {
    id: 9889,
    name: "spinach"
  },
  {
    id: 9890,
    name: "spine"
  },
  {
    id: 9891,
    name: "spine animation"
  },
  {
    id: 9892,
    name: "spinlock"
  },
  {
    id: 9893,
    name: "spinnaker"
  },
  {
    id: 9894,
    name: "spinnakr"
  },
  {
    id: 9895,
    name: "spinner"
  },
  {
    id: 9896,
    name: "spiral"
  },
  {
    id: 9897,
    name: "sploder"
  },
  {
    id: 9898,
    name: "splunk"
  },
  {
    id: 9899,
    name: "spock"
  },
  {
    id: 9900,
    name: "spring boot"
  },
  {
    id: 9901,
    name: "spring cloud"
  },
  {
    id: 9902,
    name: "spring mvc"
  },
  {
    id: 9903,
    name: "spring security"
  },
  {
    id: 9904,
    name: "sprint"
  },
  {
    id: 9905,
    name: "sproutvideo"
  },
  {
    id: 9906,
    name: "sql"
  },
  {
    id: 9907,
    name: "sql database"
  },
  {
    id: 9908,
    name: "sql queries."
  },
  {
    id: 9909,
    name: "sql.dba"
  },
  {
    id: 9910,
    name: "sqlalchemy"
  },
  {
    id: 9911,
    name: "sqlite"
  },
  {
    id: 9912,
    name: "squash stretch"
  },
  {
    id: 9913,
    name: "ssh"
  },
  {
    id: 9914,
    name: "ssl"
  },
  {
    id: 9915,
    name: "ssr"
  },
  {
    id: 9916,
    name: "stack"
  },
  {
    id: 9917,
    name: "stackato"
  },
  {
    id: 9918,
    name: "stackdriver"
  },
  {
    id: 9919,
    name: "stackify"
  },
  {
    id: 9920,
    name: "stacking"
  },
  {
    id: 9921,
    name: "stackmob"
  },
  {
    id: 9922,
    name: "stackpath"
  },
  {
    id: 9923,
    name: "stackpath serverless edgeengine"
  },
  {
    id: 9924,
    name: "stackstorm"
  },
  {
    id: 9925,
    name: "staging"
  },
  {
    id: 9926,
    name: "stakeholder management"
  },
  {
    id: 9927,
    name: "stakeholders"
  },
  {
    id: 9928,
    name: "start acceptance test creation"
  },
  {
    id: 9929,
    name: "startttls"
  },
  {
    id: 9930,
    name: "statbot"
  },
  {
    id: 9931,
    name: "state transaction testing"
  },
  {
    id: 9932,
    name: "state transition"
  },
  {
    id: 9933,
    name: "statement testing and coverage"
  },
  {
    id: 9934,
    name: "statiscal language modeling"
  },
  {
    id: 9935,
    name: "statistics"
  },
  {
    id: 9936,
    name: "statsbot"
  },
  {
    id: 9937,
    name: "statsd"
  },
  {
    id: 9938,
    name: "status"
  },
  {
    id: 9939,
    name: "stay abreast of industry developments"
  },
  {
    id: 9940,
    name: "steamos"
  },
  {
    id: 9941,
    name: "stencyl"
  },
  {
    id: 9942,
    name: "storage"
  },
  {
    id: 9943,
    name: "store"
  },
  {
    id: 9944,
    name: "storyboard"
  },
  {
    id: 9945,
    name: "straight ahead"
  },
  {
    id: 9946,
    name: "strategic planning"
  },
  {
    id: 9947,
    name: "streamlit"
  },
  {
    id: 9948,
    name: "stress testing"
  },
  {
    id: 9949,
    name: "string array"
  },
  {
    id: 9950,
    name: "string matching"
  },
  {
    id: 9951,
    name: "strings"
  },
  {
    id: 9952,
    name: "strong communication skills"
  },
  {
    id: 9953,
    name: "strong leadership and influencing capabilities"
  },
  {
    id: 9954,
    name: "structs"
  },
  {
    id: 9955,
    name: "structural"
  },
  {
    id: 9956,
    name: "structural testing"
  },
  {
    id: 9957,
    name: "structure based"
  },
  {
    id: 9958,
    name: "structure-learnng"
  },
  {
    id: 9959,
    name: "structured notes"
  },
  {
    id: 9960,
    name: "styleables"
  },
  {
    id: 9961,
    name: "styled components"
  },
  {
    id: 9962,
    name: "styled jsx"
  },
  {
    id: 9963,
    name: "stylelint"
  },
  {
    id: 9964,
    name: "styles"
  },
  {
    id: 9965,
    name: "subject headings"
  },
  {
    id: 9966,
    name: "summarization"
  },
  {
    id: 9967,
    name: "summary statistics"
  },
  {
    id: 9968,
    name: "supabase"
  },
  {
    id: 9969,
    name: "superset"
  },
  {
    id: 9970,
    name: "supervised learning"
  },
  {
    id: 9971,
    name: "supply chain"
  },
  {
    id: 9972,
    name: "supply chain."
  },
  {
    id: 9973,
    name: "support"
  },
  {
    id: 9974,
    name: "support vector machine"
  },
  {
    id: 9975,
    name: "surface modeling"
  },
  {
    id: 9976,
    name: "survivability"
  },
  {
    id: 9977,
    name: "suse linux"
  },
  {
    id: 9978,
    name: "svelte"
  },
  {
    id: 9979,
    name: "svm"
  },
  {
    id: 9980,
    name: "svn"
  },
  {
    id: 9981,
    name: "swagger"
  },
  {
    id: 9982,
    name: "swift"
  },
  {
    id: 9983,
    name: "swift package manager"
  },
  {
    id: 9984,
    name: "swift payments"
  },
  {
    id: 9985,
    name: "swift ui"
  },
  {
    id: 9986,
    name: "symfony"
  },
  {
    id: 9987,
    name: "sync adapter"
  },
  {
    id: 9988,
    name: "syncano"
  },
  {
    id: 9989,
    name: "synchronization"
  },
  {
    id: 9990,
    name: "synsets"
  },
  {
    id: 9991,
    name: "syntactic analysis"
  },
  {
    id: 9992,
    name: "syntactic features"
  },
  {
    id: 9993,
    name: "syntactic information"
  },
  {
    id: 9994,
    name: "syntactic parsing"
  },
  {
    id: 9995,
    name: "sysdig"
  },
  {
    id: 9996,
    name: "system and acceptance tests"
  },
  {
    id: 9997,
    name: "system architecture"
  },
  {
    id: 9998,
    name: "system maintenance"
  },
  {
    id: 9999,
    name: "system test creation"
  },
  {
    id: 10000,
    name: "system testing"
  },
  {
    id: 10001,
    name: "system trace"
  },
  {
    id: 10002,
    name: "systems design"
  },
  {
    id: 10003,
    name: "t-sne"
  },
  {
    id: 10004,
    name: "tableau"
  },
  {
    id: 10005,
    name: "tables"
  },
  {
    id: 10006,
    name: "tabular data"
  },
  {
    id: 10007,
    name: "tailwind"
  },
  {
    id: 10008,
    name: "tailwind css"
  },
  {
    id: 10009,
    name: "taplytics"
  },
  {
    id: 10010,
    name: "target"
  },
  {
    id: 10011,
    name: "target achievement"
  },
  {
    id: 10012,
    name: "task scheduling"
  },
  {
    id: 10013,
    name: "tasks"
  },
  {
    id: 10014,
    name: "tcp"
  },
  {
    id: 10015,
    name: "tcp/ip"
  },
  {
    id: 10016,
    name: "tdd"
  },
  {
    id: 10017,
    name: "team development"
  },
  {
    id: 10018,
    name: "team management"
  },
  {
    id: 10019,
    name: "teamcity"
  },
  {
    id: 10020,
    name: "technical animator"
  },
  {
    id: 10021,
    name: "technical ba"
  },
  {
    id: 10022,
    name: "technical design documentation"
  },
  {
    id: 10023,
    name: "technical documentation"
  },
  {
    id: 10024,
    name: "technical leadership"
  },
  {
    id: 10025,
    name: "technical skills"
  },
  {
    id: 10026,
    name: "technical writing"
  },
  {
    id: 10027,
    name: "techno functional"
  },
  {
    id: 10028,
    name: "technologically savvy"
  },
  {
    id: 10029,
    name: "technology risk"
  },
  {
    id: 10030,
    name: "technology solutions"
  },
  {
    id: 10031,
    name: "telecom"
  },
  {
    id: 10032,
    name: "tensorboard"
  },
  {
    id: 10033,
    name: "tensorflow"
  },
  {
    id: 10034,
    name: "tensors"
  },
  {
    id: 10035,
    name: "term frequency"
  },
  {
    id: 10036,
    name: "termius"
  },
  {
    id: 10037,
    name: "terraform"
  },
  {
    id: 10038,
    name: "test approach"
  },
  {
    id: 10039,
    name: "test cafe"
  },
  {
    id: 10040,
    name: "test case"
  },
  {
    id: 10041,
    name: "test case review"
  },
  {
    id: 10042,
    name: "test cases"
  },
  {
    id: 10043,
    name: "test collab"
  },
  {
    id: 10044,
    name: "test data"
  },
  {
    id: 10045,
    name: "test driven development"
  },
  {
    id: 10046,
    name: "test environments"
  },
  {
    id: 10047,
    name: "test execution"
  },
  {
    id: 10048,
    name: "test lab"
  },
  {
    id: 10049,
    name: "test levels"
  },
  {
    id: 10050,
    name: "test management"
  },
  {
    id: 10051,
    name: "test management tool"
  },
  {
    id: 10052,
    name: "test management tools"
  },
  {
    id: 10053,
    name: "test plan"
  },
  {
    id: 10054,
    name: "test planning"
  },
  {
    id: 10055,
    name: "test process"
  },
  {
    id: 10056,
    name: "test scenarios"
  },
  {
    id: 10057,
    name: "test schedule"
  },
  {
    id: 10058,
    name: "test scripts"
  },
  {
    id: 10059,
    name: "test strategy"
  },
  {
    id: 10060,
    name: "test types"
  },
  {
    id: 10061,
    name: "testcafe"
  },
  {
    id: 10062,
    name: "testcaselab"
  },
  {
    id: 10063,
    name: "testcomplete"
  },
  {
    id: 10064,
    name: "testdroid"
  },
  {
    id: 10065,
    name: "tester"
  },
  {
    id: 10066,
    name: "testfairy"
  },
  {
    id: 10067,
    name: "testflight"
  },
  {
    id: 10068,
    name: "testflo"
  },
  {
    id: 10069,
    name: "testify"
  },
  {
    id: 10070,
    name: "testing"
  },
  {
    id: 10071,
    name: "testing is context dependent"
  },
  {
    id: 10072,
    name: "testing principles"
  },
  {
    id: 10073,
    name: "testing process"
  },
  {
    id: 10074,
    name: "testing shows presence of defects"
  },
  {
    id: 10075,
    name: "testing techniques"
  },
  {
    id: 10076,
    name: "testmonitor"
  },
  {
    id: 10077,
    name: "testmunk"
  },
  {
    id: 10078,
    name: "testpad"
  },
  {
    id: 10079,
    name: "testproject"
  },
  {
    id: 10080,
    name: "testrail"
  },
  {
    id: 10081,
    name: "tests"
  },
  {
    id: 10082,
    name: "text classification"
  },
  {
    id: 10083,
    name: "text classifier"
  },
  {
    id: 10084,
    name: "text clustering"
  },
  {
    id: 10085,
    name: "text detection"
  },
  {
    id: 10086,
    name: "text entry"
  },
  {
    id: 10087,
    name: "text lines"
  },
  {
    id: 10088,
    name: "text mining"
  },
  {
    id: 10089,
    name: "text procssing"
  },
  {
    id: 10090,
    name: "text recognition"
  },
  {
    id: 10091,
    name: "text summarization"
  },
  {
    id: 10092,
    name: "themes"
  },
  {
    id: 10093,
    name: "thinking skills"
  },
  {
    id: 10094,
    name: "third parties"
  },
  {
    id: 10095,
    name: "thread handling"
  },
  {
    id: 10096,
    name: "threads"
  },
  {
    id: 10097,
    name: "three"
  },
  {
    id: 10098,
    name: "time management"
  },
  {
    id: 10099,
    name: "time managements"
  },
  {
    id: 10100,
    name: "time profile"
  },
  {
    id: 10101,
    name: "timescaledb"
  },
  {
    id: 10102,
    name: "timing"
  },
  {
    id: 10103,
    name: "tizen"
  },
  {
    id: 10104,
    name: "tls"
  },
  {
    id: 10105,
    name: "toast"
  },
  {
    id: 10106,
    name: "toasted analytics"
  },
  {
    id: 10107,
    name: "token authentication"
  },
  {
    id: 10108,
    name: "tomcat"
  },
  {
    id: 10109,
    name: "tool"
  },
  {
    id: 10110,
    name: "tools"
  },
  {
    id: 10111,
    name: "top down"
  },
  {
    id: 10112,
    name: "topic model"
  },
  {
    id: 10113,
    name: "tour"
  },
  {
    id: 10114,
    name: "traceability matrix"
  },
  {
    id: 10115,
    name: "trackjs"
  },
  {
    id: 10116,
    name: "tradding"
  },
  {
    id: 10117,
    name: "trade"
  },
  {
    id: 10118,
    name: "trade life cycle"
  },
  {
    id: 10119,
    name: "trading application"
  },
  {
    id: 10120,
    name: "trading systems"
  },
  {
    id: 10121,
    name: "traefik"
  },
  {
    id: 10122,
    name: "train model"
  },
  {
    id: 10123,
    name: "training"
  },
  {
    id: 10124,
    name: "transactions"
  },
  {
    id: 10125,
    name: "transfer learning"
  },
  {
    id: 10126,
    name: "transformer"
  },
  {
    id: 10127,
    name: "transition"
  },
  {
    id: 10128,
    name: "translation"
  },
  {
    id: 10129,
    name: "translation models"
  },
  {
    id: 10130,
    name: "travel"
  },
  {
    id: 10131,
    name: "travis"
  },
  {
    id: 10132,
    name: "travis ci"
  },
  {
    id: 10133,
    name: "travis-ci"
  },
  {
    id: 10134,
    name: "travisci"
  },
  {
    id: 10135,
    name: "tree"
  },
  {
    id: 10136,
    name: "trello"
  },
  {
    id: 10137,
    name: "triggermesh"
  },
  {
    id: 10138,
    name: "tslint"
  },
  {
    id: 10139,
    name: "twilio functions"
  },
  {
    id: 10140,
    name: "twine"
  },
  {
    id: 10141,
    name: "typescript"
  },
  {
    id: 10142,
    name: "uat test"
  },
  {
    id: 10143,
    name: "ubuntu"
  },
  {
    id: 10144,
    name: "ucp"
  },
  {
    id: 10145,
    name: "udp"
  },
  {
    id: 10146,
    name: "ui"
  },
  {
    id: 10147,
    name: "ui automator"
  },
  {
    id: 10148,
    name: "ui components"
  },
  {
    id: 10149,
    name: "ui layouts"
  },
  {
    id: 10150,
    name: "ui testing"
  },
  {
    id: 10151,
    name: "ui/ux"
  },
  {
    id: 10152,
    name: "uiapplication"
  },
  {
    id: 10153,
    name: "uicollectionview"
  },
  {
    id: 10154,
    name: "uikit"
  },
  {
    id: 10155,
    name: "uinavigationcontroller"
  },
  {
    id: 10156,
    name: "uitabbarcontroller"
  },
  {
    id: 10157,
    name: "uitableview"
  },
  {
    id: 10158,
    name: "uitest"
  },
  {
    id: 10159,
    name: "uiviewcontroller"
  },
  {
    id: 10160,
    name: "uiviewcontroller lifecycle"
  },
  {
    id: 10161,
    name: "uiviews"
  },
  {
    id: 10162,
    name: "uk payments"
  },
  {
    id: 10163,
    name: "umap"
  },
  {
    id: 10164,
    name: "uml"
  },
  {
    id: 10165,
    name: "unbiased estimator"
  },
  {
    id: 10166,
    name: "underfitting"
  },
  {
    id: 10167,
    name: "uniform continuous"
  },
  {
    id: 10168,
    name: "uniform discrete"
  },
  {
    id: 10169,
    name: "unit"
  },
  {
    id: 10170,
    name: "unit testing"
  },
  {
    id: 10171,
    name: "unit tests"
  },
  {
    id: 10172,
    name: "unity"
  },
  {
    id: 10173,
    name: "unity2d"
  },
  {
    id: 10174,
    name: "unity3d"
  },
  {
    id: 10175,
    name: "unity graphic"
  },
  {
    id: 10176,
    name: "unix"
  },
  {
    id: 10177,
    name: "unreal"
  },
  {
    id: 10178,
    name: "unreal development kit"
  },
  {
    id: 10179,
    name: "unreal engine"
  },
  {
    id: 10180,
    name: "unreal engine 4"
  },
  {
    id: 10181,
    name: "unsupervised learning"
  },
  {
    id: 10182,
    name: "upcloud"
  },
  {
    id: 10183,
    name: "uptimerobot"
  },
  {
    id: 10184,
    name: "usability"
  },
  {
    id: 10185,
    name: "usabilla"
  },
  {
    id: 10186,
    name: "use case and user stories"
  },
  {
    id: 10187,
    name: "use case testing"
  },
  {
    id: 10188,
    name: "use cases"
  },
  {
    id: 10189,
    name: "useberry"
  },
  {
    id: 10190,
    name: "useful approximations"
  },
  {
    id: 10191,
    name: "user acceptance"
  },
  {
    id: 10192,
    name: "user acceptance testing"
  },
  {
    id: 10193,
    name: "user administration"
  },
  {
    id: 10194,
    name: "user documentation"
  },
  {
    id: 10195,
    name: "user experience"
  },
  {
    id: 10196,
    name: "user interface"
  },
  {
    id: 10197,
    name: "user manuals"
  },
  {
    id: 10198,
    name: "user scenarios"
  },
  {
    id: 10199,
    name: "user story"
  },
  {
    id: 10200,
    name: "user tour"
  },
  {
    id: 10201,
    name: "userhabit"
  },
  {
    id: 10202,
    name: "usertrack"
  },
  {
    id: 10203,
    name: "using devtools"
  },
  {
    id: 10204,
    name: "using lighthouse"
  },
  {
    id: 10205,
    name: "uwsgi"
  },
  {
    id: 10206,
    name: "ux"
  },
  {
    id: 10207,
    name: "uxcam"
  },
  {
    id: 10208,
    name: "v"
  },
  {
    id: 10209,
    name: "validate"
  },
  {
    id: 10210,
    name: "validation"
  },
  {
    id: 10211,
    name: "value type"
  },
  {
    id: 10212,
    name: "vanishing gradient problem"
  },
  {
    id: 10213,
    name: "variance"
  },
  {
    id: 10214,
    name: "varianceand standard deviation"
  },
  {
    id: 10215,
    name: "vector drawables"
  },
  {
    id: 10216,
    name: "vectors"
  },
  {
    id: 10217,
    name: "vega-lite"
  },
  {
    id: 10218,
    name: "verbal communication"
  },
  {
    id: 10219,
    name: "video game design"
  },
  {
    id: 10220,
    name: "vidpulse"
  },
  {
    id: 10221,
    name: "vidyard"
  },
  {
    id: 10222,
    name: "vietnammobile"
  },
  {
    id: 10223,
    name: "viettel"
  },
  {
    id: 10224,
    name: "viewmodel"
  },
  {
    id: 10225,
    name: "vinaphone"
  },
  {
    id: 10226,
    name: "viper"
  },
  {
    id: 10227,
    name: "virtual environment"
  },
  {
    id: 10228,
    name: "virtual reality"
  },
  {
    id: 10229,
    name: "virtual reality software design"
  },
  {
    id: 10230,
    name: "visual arts"
  },
  {
    id: 10231,
    name: "visual basic"
  },
  {
    id: 10232,
    name: "visual debugging"
  },
  {
    id: 10233,
    name: "visual studio"
  },
  {
    id: 10234,
    name: "visual website optimizer"
  },
  {
    id: 10235,
    name: "visualization"
  },
  {
    id: 10236,
    name: "volume testing"
  },
  {
    id: 10237,
    name: "vows"
  },
  {
    id: 10238,
    name: "vr platforms"
  },
  {
    id: 10239,
    name: "vue.js"
  },
  {
    id: 10240,
    name: "vuejs"
  },
  {
    id: 10241,
    name: "vuepress"
  },
  {
    id: 10242,
    name: "vuetify"
  },
  {
    id: 10243,
    name: "vultr"
  },
  {
    id: 10244,
    name: "waterfall"
  },
  {
    id: 10245,
    name: "wcf"
  },
  {
    id: 10246,
    name: "web"
  },
  {
    id: 10247,
    name: "web application"
  },
  {
    id: 10248,
    name: "web design"
  },
  {
    id: 10249,
    name: "web product"
  },
  {
    id: 10250,
    name: "web scraping"
  },
  {
    id: 10251,
    name: "web server"
  },
  {
    id: 10252,
    name: "web sockets"
  },
  {
    id: 10253,
    name: "webdriver"
  },
  {
    id: 10254,
    name: "webfaction"
  },
  {
    id: 10255,
    name: "webpack"
  },
  {
    id: 10256,
    name: "webpacker"
  },
  {
    id: 10257,
    name: "websphere"
  },
  {
    id: 10258,
    name: "websphere liberty"
  },
  {
    id: 10259,
    name: "weebly"
  },
  {
    id: 10260,
    name: "weex"
  },
  {
    id: 10261,
    name: "weight"
  },
  {
    id: 10262,
    name: "wercker"
  },
  {
    id: 10263,
    name: "white box"
  },
  {
    id: 10264,
    name: "whitebox testing"
  },
  {
    id: 10265,
    name: "wifi"
  },
  {
    id: 10266,
    name: "wildfly"
  },
  {
    id: 10267,
    name: "windows"
  },
  {
    id: 10268,
    name: "windows 7"
  },
  {
    id: 10269,
    name: "windows 8"
  },
  {
    id: 10270,
    name: "windows 10"
  },
  {
    id: 10271,
    name: "windows pc"
  },
  {
    id: 10272,
    name: "windows phone"
  },
  {
    id: 10273,
    name: "wireframe"
  },
  {
    id: 10274,
    name: "wireframes"
  },
  {
    id: 10275,
    name: "wix"
  },
  {
    id: 10276,
    name: "woocommerce"
  },
  {
    id: 10277,
    name: "word2vec"
  },
  {
    id: 10278,
    name: "word embedding"
  },
  {
    id: 10279,
    name: "word processing"
  },
  {
    id: 10280,
    name: "word segmentation"
  },
  {
    id: 10281,
    name: "word similarity"
  },
  {
    id: 10282,
    name: "wordnet"
  },
  {
    id: 10283,
    name: "wordpress"
  },
  {
    id: 10284,
    name: "workflow"
  },
  {
    id: 10285,
    name: "workflow management"
  },
  {
    id: 10286,
    name: "workmanager"
  },
  {
    id: 10287,
    name: "workplan"
  },
  {
    id: 10288,
    name: "writing"
  },
  {
    id: 10289,
    name: "writing skills"
  },
  {
    id: 10290,
    name: "writing test cases"
  },
  {
    id: 10291,
    name: "written"
  },
  {
    id: 10292,
    name: "written communication"
  },
  {
    id: 10293,
    name: "xamarin"
  },
  {
    id: 10294,
    name: "xamarin test cloud"
  },
  {
    id: 10295,
    name: "xampp"
  },
  {
    id: 10296,
    name: "xbehave"
  },
  {
    id: 10297,
    name: "xbox one"
  },
  {
    id: 10298,
    name: "xcode"
  },
  {
    id: 10299,
    name: "xcode server"
  },
  {
    id: 10300,
    name: "xctest"
  },
  {
    id: 10301,
    name: "xhr"
  },
  {
    id: 10302,
    name: "xml"
  },
  {
    id: 10303,
    name: "xml fonts"
  },
  {
    id: 10304,
    name: "xna"
  },
  {
    id: 10305,
    name: "xqual"
  },
  {
    id: 10306,
    name: "xray"
  },
  {
    id: 10307,
    name: "yaml"
  },
  {
    id: 10308,
    name: "yandex metrica"
  },
  {
    id: 10309,
    name: "yarn"
  },
  {
    id: 10310,
    name: "yesod"
  },
  {
    id: 10311,
    name: "yii2"
  },
  {
    id: 10312,
    name: "zabbix"
  },
  {
    id: 10313,
    name: "zbrush"
  },
  {
    id: 10314,
    name: "zend server"
  },
  {
    id: 10315,
    name: "zephyr"
  },
  {
    id: 10316,
    name: "zephyr scale"
  },
  {
    id: 10317,
    name: "zero server"
  },
  {
    id: 10318,
    name: "zoho catalyst"
  },
  {
    id: 10319,
    name: "zope"
  },
  {
    id: 10320,
    name: "zuul"
  },
  {
    id: 10321,
    name: "c# programming"
  },
  {
    id: 10322,
    name: "Data Warehousing"
  },
  {
    id: 10323,
    name: "pinelines"
  },
  {
    id: 10324,
    name: "data modelling"
  },
  {
    id: 10325,
    name: "hadoop"
  },
  {
    id: 10326,
    name: "Ansible Configuration Management"
  },
  {
    id: 10327,
    name: "Powershell "
  },
  {
    id: 10328,
    name: "rxjava"
  },
  {
    id: 10329,
    name: "Game Engines"
  },
  {
    id: 10330,
    name: "Lua Programming"
  },
  {
    id: 10331,
    name: "automation framework"
  },
  {
    id: 10332,
    name: "Hp Uft"
  },
  {
    id: 10333,
    name: "junit framework"
  },
  {
    id: 10334,
    name: "Analytical Thinking"
  },
  {
    id: 10335,
    name: "Communication Skills"
  },
  {
    id: 10336,
    name: "Influencing Others"
  },
  {
    id: 10337,
    name: "Commercial Acumen"
  },
  {
    id: 10338,
    name: "autonomy"
  },
  {
    id: 10339,
    name: "Construction Management"
  },
  {
    id: 10340,
    name: "Civil Engineering"
  },
  {
    id: 10341,
    name: "Microsoft Office"
  },
  {
    id: 10342,
    name: "Resilience"
  },
  {
    id: 10343,
    name: "Computer Literacy"
  },
  {
    id: 10344,
    name: null
  }
];

  const { loading, fetch, jobDomains } = state;

  const dispatch = useDispatch();
  const provinces = useSelector((state) => state.cv.provinces);
  const domains = useSelector((state) => state.jobDomain.domains);

  const options = provinces.map(({ province_id, province_name }) => ({
    value: province_id,
    label: province_name
  }));

  useEffect(() => {
    if (!domains.length) {
      dispatch({ type: GET_JOB_DOMAIN });
      setState((curState) => ({ ...curState, loading: true }));
    } else {
      setState((curState) => ({
        ...curState,
        jobDomains: domains.map(({ id, name }) => ({ value: id, label: name }))
      }));
    }
  }, []);

  if (!fetch) {
    if (domains.length && loading) {
      setState((curState) => ({
        ...curState,
        loading: false,
        fetch: true,
        jobDomains: domains.map(({ id, name }) => ({ value: id, label: name }))
      }));
    }
  }

  return (
    <div className="explore-look">
      <h2 className="explore-look__title">
        What skill do you want to focus on?
      </h2>

      <div className="row">
        <div className="col-md-8 explore-look__input"></div>
        <div className="col-6 col-md-4">
          <button
            type="submit"
            className="btn btn-full-width explore-look__btn"
            style={{ fontWeight: 700 }}
            onClick={handleSubmit}
          >
            Explore
          </button>
        </div>
      </div>
    </div>
  );
}

export default Explore = reduxForm({
  form: "simple",
  touchOnBlur: false
})(Explore);

const CustomSelect = ({ input, ...props }) => (
  <SelectWithSearch
    selectedOption={input.value}
    onChange={input.onChange}
    {...props}
  />
);
