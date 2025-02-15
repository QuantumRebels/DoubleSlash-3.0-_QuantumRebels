import React from "react";
import Modbtn from './modbtn'
const courses = [
  {
    id: 1,
    title: "A",
    image: "https://storage.googleapis.com/kagglesdsdata/datasets/1388661/2302731/Indian/A/0.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20250215%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250215T082542Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=9fc86fb77c985fb3759c48300c5d8bcd27fb968eda6bf478a4d1709359dc3cd045fbb5f817c35f56d8826ace96493183946d8838051538c0b11335c8087534549bcdc08f1f1da5cc2037c929cc52fd4bfb64c36fa04f72a460666aa9d19260713d796f78b4ab4130e407b9eafac2e551e7e9d7f7f75e8a21652c56ace3d4807b04ac5dac796aa95074de5d2b95c3917ff4c9bd76da57282925778ac49163fb42e59bcc9287104fa6a882625e08bbbc23da91108ddfb04f1a9272f63761ec4321a871c31b1de3ce944f69c2c67b2e4152a506d6091c948a6766d1fc0151b9d8641f4d8c522558af2656321df98f344330877fb1369b8ae739bbd0e99e0226ccdf",
  },
  {
    id: 2,
    title: "B",
    image: "https://storage.googleapis.com/kagglesdsdata/datasets/1388661/2302731/Indian/B/1.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20250215%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250215T103033Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=05001e8e1eb0a5a413859114c08dae0918e6a27f87fc7364990f82b5e503c2dafb4885629bc55613fd042e340d621dbcdc765352341cb6686c6d16a65cda81b465321b3a6facff000f371d769076cfcc7857c39430ff20504aa48d6c0271d9d2bdbf35d2da2a380ad0b0dd394376223f2a350f5e60c0cce9e5ec11dc70be99c09de233262ed16c512d5494add47b15c9cb987e0f075524d753d976daa9c2b7a6d61aaa2e3e6615f6e2804e59eb58165d0daec26aed38e66fdbc1fedab0c17091c623cde830a9850dffc1833d70b7d2a48c00f81a9c02d2978e54b5d0e8c0ff357bf426183a6bf6d72a18d3b80a9304aeaad139e3e9f5205f80d996078b40e8c1",
  },
  {
    id: 3,
    title: "C",
    image: "https://storage.googleapis.com/kagglesdsdata/datasets/1388661/2302731/Indian/C/0.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20250215%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250215T082706Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=79b04d29629a67fdc9ae93d72f967f3fb39e146a17161da89dd99763efc0148ec3f138b3d7de48c72cfdcb9f63e0d5d27c2911745d45215b89735f8e0d8fec9ebe2be063d311036eee24972699abd0422daae281f506e5f28b0fa55a8638c7fe1c71d1198062dfb3befff7b87fb4ab5228607c8f6ebabf1a201b4d20d5ddd6d0cd4c8a7ba55ed89034ed493eab78ac550b8853547db94663b76e55d3456b2edc978b9c4e1dac3250ed61fbcf3eca1d2c2be8bf01dabd6cf94b273f374411e44114a2fa1f6fded139218fcdadf0dce8d2b823decc16c0e270b1e02c935d75749c9daef7369c873fba6351176446bb175c24067114d0ccb553f179bd71ebfc2c56",
  },
  {
    id: 4,
    title: "D",
    image: "https://storage.googleapis.com/kagglesdsdata/datasets/1388661/2302731/Indian/D/0.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20250215%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250215T082720Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=185252db7fedd01ba5d2a59172ca3e2b51a0451f51f48ae3f7d5b4c6730a4a3153cd206a98f66ffd0bc434c00dc80672c2a318b631e441382d86f60da1f3b1e897b18b46c9738d19b39d932286f042f5b86a4e3bd84a5cc8e5253cefa6efd47005868ce8f4fd8134b665c68063057c0b6482cbadf57c2323084c878bc1ab1f31dd8e8b2b99a55fe6f8bb6172ca1b763cb37447e62d9802520dbfeae9f296386ac40a736dcb63fe8cde81ef9665e58b4a105112bf5b1b69841385acf208657b29e5e42b87be952e48e5969b7d7148e95f3bd3f2a5887d37cc23b2672b4efac2c8d4675c0fb50bbfd969a80296ea69023867cd4f943be7c262db71f81676952485",
  },
  {
    id: 5,
    title: "E",
    image: "https://storage.googleapis.com/kagglesdsdata/datasets/1388661/2302731/Indian/E/0.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20250215%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250215T082749Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=03cbf19ca6ade9945736961e1e5344ee3a1951f7af4c1d90e661b19d1b41365d933642e637dfb0dcdadc83c74e3f9004da18063e130596d7de2713e641750bcf1c07be3b9a6376c3eeab2d619ba336d51cf6dde6c24d33ddb91b5d1fc8f8d83db5069ecc2a844c7a48262280b1575c56525bf011135bf437d2c766518ca33c7778804f40057d7444733110582407923e45cbedc8406ca037b94a0ebf44c53e5198c5abb5cfae053f56c9a039386e1d9e49063dd047bb1fe2047a2ca0f09a15da38b39c4b398f6544366d620f0f76d2453503d4ba8d8555e141d4ebfb893c4d4b0dbc709b15f089e7c0fb956e6306358f84ed488782e0ba8271bf9f1f5a6d7353",
  },
  {
    id: 6,
    title: "F",
    image: "https://storage.googleapis.com/kagglesdsdata/datasets/1388661/2302731/Indian/F/0.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20250215%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250215T082803Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=82f545a208fc40bd00e1d8e29c49032212ad6541b7fb1425972d01ca450da0b65f6d67c0c1bf4427bd6d8fc59cc4e661852978e6a3fa8561d096cb290d9fcfbc26f9335493982f8941138db20c7e094b25eb8813d6e9c21bf540bdcdd3987e5340b1239396f4c36120d9a7ccf052ed6dc180b9f32c1bc63b856d26a18acce83cdb453c46716716b10a03860be01d673abdf356b62d581fe2bd66b5203957d3277b313c24b8ac6225d07d913ab273ec6779b4d1bdfe904e1bbeca792e7ca299f014f8dea9a001742f9456bd0fb5151f1d94d306277db7a453b9657203b7fefbcc86374ef893dcdef58a4ea2f1adcd1f395d9106c08ab1914d5d1c4c3b736e8ec0",
  },
  {
    id: 7,
    title: "G",
    image: "https://storage.googleapis.com/kagglesdsdata/datasets/1388661/2302731/Indian/G/0.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20250215%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250215T082815Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=19ec72c7fdb0c23aadb2cabd505668b787df078d1019ffabbe36d5d772984ca7c69eb2657523a71952606b4ab7936fc70a113ec71e57f4127e29f3863c8cb5379d5c91a8daa09d1e5392198ecebc25a9bac3ddf01ab0d24b0979eeb661abcba4b96b48251f1408ce7663b60e3a558270b192ba77eebd24efeeb0510e7fcff874dac634f6ba4c9879b85b8ef5a0baf21db1655279c9d56ec8dfc8002839bfcb4d27cd7e8e500916c8e787a90a7882e63103e0dd01b7c46e2f06bd63018cda301fd68c6b61bf7e65cdf284fe69af96cc2290d24bce99f8e5c64e16a58eb120f92db58637d0ff97a3e9227aeea534fca4707076eca13996e144b4c341a0a64c906e",
  },
  {
    id: 8,
    title: "H",
    image: "https://storage.googleapis.com/kagglesdsdata/datasets/1388661/2302731/Indian/H/0.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20250215%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250215T082912Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=ac9689f8f48113f4545960ffad45a76ad8ff413ab9d06d96bde1d75ea9797563a7c7501554a93b408d898cf7dd898a6bc3ef6385ace4f152f10ce144565e34e9012b1055c82a8aa22ae37a635582b51846356de1aa063424183ce6a8b79d726c495d9fc32ed8d592def1b7e08c7cccd9d18b671678c026202c450344898b2a0e8004b4a728cac544c7b6b74c1e5820cf2a7924f51f59bee6463a0b0e726588c35da590badc5443baa44bbba7d631dc57437d010551c03f8de4df0c0f9c24ad3f799bc87bc5fe60fbf873cfcd6553125834476dbfa832454c8cb1b620101ac64012a29659deb6a4f2d059523cd9d4b66cd75bd5c0bc89e4016dc0ebf21da5d783",
  },
  {
    id: 9,
    title: "I",
    image: "https://storage.googleapis.com/kagglesdsdata/datasets/1388661/2302731/Indian/I/0.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20250215%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250215T082924Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=2ecf16fd97bf4254e5eb62a0ed18036d490495015e60df53d92dc6a7d58226bf0e2840c81720a779fd3d7e819c2a8937d08637490846c891114dafc00fba71b028c692765e8b0d77f4a07f993af290342d72bf0c4f01ad0c9d6e6377425f40f22fa3253788b38dd96d1be93f683c93e134d29830a6bfdf73bd38b1f8c3267c254defe1430b51b33284c4a9f3702a6c3bf05fda9c82b0964cd5472c60e5b44c9a74d5e3ccb9fed6805b72b30ba12418d0c2bbfca0527f0998e3bae2241240b74b79e9c7560dd93556be8ab00bfeeea6ac4bd67cc1cb00b9967f7d5cb0603c4e8fa01b001cbeaa9a77f2d3a55e021bb0094b6987c71dc30991f785e2de3e4b211c",
  },
  {
    id: 10,
    title: "J",
    image: "https://storage.googleapis.com/kagglesdsdata/datasets/1388661/2302731/Indian/I/0.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20250215%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250215T082924Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=2ecf16fd97bf4254e5eb62a0ed18036d490495015e60df53d92dc6a7d58226bf0e2840c81720a779fd3d7e819c2a8937d08637490846c891114dafc00fba71b028c692765e8b0d77f4a07f993af290342d72bf0c4f01ad0c9d6e6377425f40f22fa3253788b38dd96d1be93f683c93e134d29830a6bfdf73bd38b1f8c3267c254defe1430b51b33284c4a9f3702a6c3bf05fda9c82b0964cd5472c60e5b44c9a74d5e3ccb9fed6805b72b30ba12418d0c2bbfca0527f0998e3bae2241240b74b79e9c7560dd93556be8ab00bfeeea6ac4bd67cc1cb00b9967f7d5cb0603c4e8fa01b001cbeaa9a77f2d3a55e021bb0094b6987c71dc30991f785e2de3e4b211c",
  },
  {
    id: 11,
    title: "K",
    image: "https://storage.googleapis.com/kagglesdsdata/datasets/1388661/2302731/Indian/K/0.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20250215%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250215T082946Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=a03c27c7d83874f3806f521149786133f1cfecd8c7d43a267213ad6ba7973d451a6e876a46d48de1eb3fe10a5de78a122724c80bc63367363ede793ec7fd9b172415d13cec745e3f92cae9838faf54d30cae85fd84cdeff6a8ae96e30da0ea68f2c19fb8d410a5acacd90f7cf7cf92a4049393d69ee61f4445e109d046bcf9bf48fbf2b48c29fc837d0e5f3fc54a5f317efa511825e9dac4ac46767380a7a7f1a3b77ea59c883e30a17170c712cc4c66c99193ee29bafe8568f1c267a809b1a1c7840a742f8025339d632d95582f2dcf1a9d96b2cd572e688b8d5acad11d22111a7ed9f5c55b04042476ec858d11d4f2fde6ffab5f416ebb025ba0f88dfc14d8",
  },
  {
    id: 12,
    title: "L",
    image: "https://storage.googleapis.com/kagglesdsdata/datasets/1388661/2302731/Indian/L/0.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20250215%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250215T083003Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=4f7d4c5988723be39b02a363cd0b99919ef40836e20e71138a2991ae046b5a873e3d97a5005f48dad845fb6ad7558a0b011230e681a23f07d05a5729ea764b6f015c4c45eb89e746a2fff8b9ee531712797404d6883550c3de659aea27d6008320e3a188c5d8caca525e3b80d951692e8112a3a43d037de0b65eeb44f1d1f1d49e0d9d63dc0000d5f99cefcbe23261d9d1e4d08261bd46878f429a61bce9ce3a86384bcb597195372a32eeb806847802cf7a03687903cd033808d7eca7bd85fd25633f760f2a0c2c08d482cb9b417ed1aefd5f1ee0497e4993e2ba853e0d09384991b38b27cd4bfc49a293e11b99082ce0e4782ad1750d22b24b38587c89e0e6",
  },
  {
    id: 13,
    title: "M",
    image: "https://storage.googleapis.com/kagglesdsdata/datasets/1388661/2302731/Indian/M/0.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20250215%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250215T083013Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=4ee5e6edfad19261c8646e9d70ccb9ab425eddc08620fd75e2c5fb91aeda8cc91db9ce1387d0199ee34040b8245f2a9de444d890f2606008c60894add7aeb1f629d9f14e2d392e69544656f3446948efd76a585b7d6374fd5a5d1e0ec4f188686caa04f63acf80d87d96e6a36cf5fb5a2fb6837257dd7751315e10a0b5385bfc4683e3e2ce7a352c9cfd44a50e2e3707af61694a1df3ddbea5b19404c8f26b83bbb6669fdec66f6d1407b040b941de2df8e9d7dd0a0c89aea304d4ec583cccb9903b03683184c8f231484f47293d0fb941b0f30d81b38ab5477fe1590b198fb01ed3380e85aefa989fb7aa58c2a45b66f9a7603dc80542e56f32c2b59c61f208",
  },
  {
    id: 14,
    title: "N",
    image: "https://storage.googleapis.com/kagglesdsdata/datasets/1388661/2302731/Indian/N/0.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20250215%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250215T083024Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=0ca91a3299617429b8badae49bdb700747fc6a355ab27fe737da4ca758eae0610f906a975578450839ddd4aa9189877536d1a804007b867b5157750406a2f4bc7b005a067876c8a34c492f84f55f199e33f6173dac9db3cf6b910441b23362c86a9374f2dac17855e431a4e1d5032aeca07f60890ead78f68e2e5813decfbe67fdf41e5b5d5f63cc27916beb89efe18d6c45f0aad2d1632aee14a7b73464cdae08fa2652feb4cb20709690c841d527faf8f9e6f32455741714afff30ba8ac23f25b38f4369e336568c8d4e0a73c2870946cc064ed008c8f35eb47f5237aa6fa7688a7965feb921ee7ca9040ecb6f0e5cbe419b46af2ce42badd61ee8830d6a9d",
  },
  {
    id: 15,
    title: "0",
    image: "https://storage.googleapis.com/kagglesdsdata/datasets/1388661/2302731/Indian/O/0.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20250215%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250215T083034Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=4aa1e1b10e5d14e38bd39e1a9d53d2bf36ddd32f7f7accaeafd4d9ea04521195890e0d7049eee1d2c12ec1f3426feedc3c991c5496ab3e3ec0a3f1db78ecb48d9aa74c9c065d663a074f5ca342c011f70f74d1a1ec9709e583770502730296915d58a7ef668c956f91abc95defc241c132944deab918d558875f4f7ddf7e7353aadd94bf690858338ebf15aca945756a9b8a2348f0611d2c5d257b17ba678214b9d7ac616cde6c53747aa7a928daa5f2db4ff10ab726faa6164e32911bb361c855bd4736c48a9f9f2b0598327200a009a063fbec6dafda95f00fd74da4287741c16eb1bef427ac43e138df5eb7c69ccffc4cc70131e841910a65552f31755abd",
  },
  {
    id: 16,
    title: "P",
    image: "https://storage.googleapis.com/kagglesdsdata/datasets/1388661/2302731/Indian/P/0.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20250215%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250215T083048Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=65cdd10593935c3356e6cb857c9ec71d7209bc8d22deb764c1d7cc8c7627894c681eb84822bc59a8f17f58c2a0a5e8a75976396bd9ece49ae68c3ad2b0b9e7a6177be1c9a610ddc219cc874d8eb70526f44e6fabddc7336d9fccc0d651ba07fe2a8733822a9a7f490eaf9112d5cad95fa94e65dc322b9c98c333dfb0f0b45d720f29956b31b10db887e474803232d81efb50530ee6d28a0739380a6c2c618ecc0eb7ccf771511c17a550c3e3a28d38f214619478e8f929545009dfd4c5b4a275b144e53aae9fd1121b54a9a140312048976b19908776fd7e08ba7b62d9d63694c315544d0b367bf2d07aa3cbfb89a13ceaec1deaa138a3e8c7c6afae8465e662",
  },
  {
    id: 17,
    title: "Q",
    image: "https://storage.googleapis.com/kagglesdsdata/datasets/1388661/2302731/Indian/Q/0.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20250215%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250215T083111Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=2dbebf9208fa6e1f0c725478aefad2c3b592d457bacf4bc79467ef1e3898c204938acc29e06f2b8f7780bdc9c1bbcea9e5c01c25d370faec5f7bd2ddddaa436ef40807af399bf7d3ba4cb540d403a872ddd93c39cb48315b686f6e8a31a49efba3289cf48e9ef0723ef9132c0e451f147a401d444bf6953df4e0413f2e93d7a22b6951936ed2ff4ce14fdc37b4972a89d8b1c16ca669e919a7e963daf8e84f47caf065a92267a09d7b137d7b7334f6c6f1c29dba7e10d54c743651566738fb42daead4bbb387443137bbf05b98cedbaf9dcdb0d0f763db2a7eaa055378fd12e7b2cbbc48e62d85be7244caf3a3ab5ebba810ce12c9859c1dc91c379b0d3d6a10",
  },
  {
    id: 18,
    title: "R",
    image: "https://storage.googleapis.com/kagglesdsdata/datasets/1388661/2302731/Indian/R/0.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20250215%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250215T083124Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=a7c04bba6ab957c3f5be07a899fa49006fbc71dad8af407b41d464831fa3099bc500080486cca00e540daca026a7bdf413ec23829c6390f950ee134c0238cb64afc810ec6ae3aaf23c7e1b5f6f1e3b942ac6a93ebaaa5f500072cd257a6a04a9ca3f7f6cbef5771bbee1368ac08897d5827ffab694ee7824a54998d22d77225495a8c58961839017a109c44144ed6d222bfda7a5c26861ce7db7eb2d5dc2a4b446f2961fb5176669ca5267a4caa3c804dd9368b1162bddba0fe32411d1949bb6c86234d13552d6463112a0664efa5d868fe3af13e7cb7cbcd0888c8ad9de663e152800683fd170be9b0b2a85e1489f206bd31b9b363777f392b44dedb3bf6988",
  },
  {
    id: 19,
    title: "S",
    image: "https://storage.googleapis.com/kagglesdsdata/datasets/1388661/2302731/Indian/S/0.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20250215%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250215T083136Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=396b82e4412f409ed0cbedcc897cd16356ccf911f9516c53f4e0960c937018ea23f975c730e3a02a22679ff814547357aa3e583d54376f30e5ef2fcbc0d82aedfa377ecab223dfc63a08ad5805c4ac7c7d6dd88c6837731ab4165765829e177cb475c2cb3d0bf43d04a21cf715f60e92db1b0cc20866bfd712bf49713ccebd18a5c6be1a22dd04b629bbaa243424c4f472e2af1914a41141d7c1ed41b5d1dcaf0edfd7a450575dfd780815ba6d4d92b3eed3166cde55740a95b3e4cfc7c2a72e738f1ee115450032b1235f76cec9d556f4c23a346754f27ac7b94a4e8bfcb1e241448958b8f62a9d555e421ee70b0c5b5457ec747a4854c75a48103275987eb5",
  },
  {
    id: 20,
    title: "T",
    image: "https://storage.googleapis.com/kagglesdsdata/datasets/1388661/2302731/Indian/T/0.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20250215%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250215T083200Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=a3b00cf320a6b5ad944c3b285ff4e6cc1633e7019d16c30bf9e6ea670099e623824ed009b3c1e31fbe0479d046a2020eee69ab8b8db8a2855d7914561035a34519addeb84fb248b165a5f7bdbcb46490066ed7d14ebd889b5142cdcc75ea4b3cee270ebd079f390fd7c539245bae7845023043a9fa0d5aef86d8d6ebe746ea9e24a1d2aa6754cac7fea8b89cd3914d1c52fc711297cd30f9a5cab13552ed7ea834d4f164b4a235422a466f974f94c581077b9db1b417c05866c68d98f74ad9755eb86d8bb6b7d68dbc492ea08614b8e6776064e6968751b10fc33f3c2d234a553e728a8ffc1ecfd40f7bc9e4ea778523b186985f2bbcf0b78e2e85f5a1a90e95",
  },
  {
    id: 21,
    title: "U",
    image: "https://storage.googleapis.com/kagglesdsdata/datasets/1388661/2302731/Indian/U/0.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20250215%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250215T083334Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=36b466a9801c8d707fcb9acf83416539fa01dc8b41ab1aee7e643a0fa1ca799f73bd3f8af376770df2960c34cfa0a7f432064a36a43eb99d04a9872ab79f9cd37fe429a2ac6ded36b1f1f20b82518a7cb3bc142e3e4b30b11fce7e7b8d3ff65089f1c40fd8b68f1d6fb4827eca7f33932b720f037adf5ae17bfd7a176cf6af3d753b2404fe900beb5ae99571f4bcb50dbedc6652cc392f39af5489ba862bfe6328ae227bbf0f8c20737724c29eb0d3a220f7ef7ff3b8edac4a6ff6b939b59037df83b3ca60286e1e67cfd7a6932da1759d034bc6691fac92c53244fa0579b0a8324531427feca16d8963899e2a8badff07b09c4bfe8cdefe5519dba90878b0f3",
  },
  {
    id: 22,
    title: "V",
    image: "https://storage.googleapis.com/kagglesdsdata/datasets/1388661/2302731/Indian/V/0.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20250215%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250215T083446Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=5b0c8b881589d4a124648badaa58e878105d42b5b6b5e0415e70c0c6f665a84d7a1674bfa630e089fccc337d40c0e72c16e77f33e9b395102e7c8ea9fd2bd9a8bf013d4d97b5e2f42f6111235c218da4bb3d6f737feef75ef2aa0815b7bca3f619fd2c31794dccf9fcb2929a5e98e65936057fce47f4a950f6513da7f7a74578545adc8e709ad08ce972e6e823ef3d205cf43484b9b436e9e808c1361084a497cf75e68e1d0e40e68b611d5377abe5b345ae0056d6d5f741f8d2d095d8ce59ffe926209d170b54af8f8cb9c9a5207bfe1f9ff1ac814c6ab8d70040df514ec008bb535f0fa90654161d33c44f52741b4b90288b1900db5735d9a19b084ae67845",
  },
  {
    id: 23,
    title: "W",
    image: "https://storage.googleapis.com/kagglesdsdata/datasets/1388661/2302731/Indian/W/0.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20250215%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250215T083500Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=30f025a723f323f76bfd8e62544e496c25ae980b3fe99276225b6d44f8a243e32d663745506608a3e2d914abbab376ab1222345f20abfe546921d30d83468cfd96e3a76168549be6e78f463b85b37b89bdeb27b7f72bb4d0d414d62cbd4773bccf90e00afd79d9456f61c8065030db84f6c458a49a8d8bb64e833e0c2c844539bbc18742a36c18108ae6477af0cfcfa84a97c0efd1cd1946943dd421796e4864b9ca65a8cb2912b57840d09eed8adc5e732c18333f32dafb1cdb0400b8768998a5c6f844fbc3c11c7582ae55810dc2c9e92b9486d4bb3cff30aa9463d90d2b187bcfa00863c686d024ea9d3f7cc312f1832bc53d19e4fad61e1f5237b04fa6da",
  },
  {
    id: 24,
    title: "X",
    image: "https://storage.googleapis.com/kagglesdsdata/datasets/1388661/2302731/Indian/X/0.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20250215%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250215T083524Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=12d9c940b61183ea146ec8c511c93e915ce2811fcc6a7719a7547beab319febe779ee2ff419e094bb491dcbda0e242aba7f914b2f7e09735c7fce64d3aeda1c68cd0ca78e3721da177d9689896982f2d20d3345624706014213f3e5f3b6334a82a998e10147d50cf0bd4dea9d4bece4b4f650077854b3b9bdfa042966a9d61a7aa10036e439fa3e29f6ec62ee99686e6c138c8fea80f5304080d14dc5bee45e88890631fda96be092f9b727ac647b59f7104f6498a157aef5b1227ff10c756d94e1157cc3f06e0d25efdf86ae2227ab270fc008f5c058418fc5121e4365b6851de964fb79af325841363cb98d274ccf860b46b335a4667ff2ee783e3d09043fc",
  },
  {
    id: 25,
    title: "Y",
    image: "https://storage.googleapis.com/kagglesdsdata/datasets/1388661/2302731/Indian/Y/0.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20250215%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250215T083538Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=1d4070f510ca501300b87a8a76c55aa13405b9931c152c58412c10835120c5fb6d64fa9cee41f137a5737224f03ad9635c778c5ccf7577a77fb5b4c0fb9ae9c298aef85fdd8d7520c5858f5747613816e678a557f0d83694e367f95b0f099c8a8e257c56311d11be1dddcafa952f98f22b25cc7979289e4d4e5b7cebb25103149cce005abbf7ed13d9aefc3fb4753d5ea2be11d993e1482fb1a47ba8a080bb95361b4feb1e312ae555c69c3c26bb97daa4032e217bdb17a84c892de3a0a95b288ee319846c5c0c10ff070f30b9cc8be3889faa19a825a2372a98eb9ce6e29bc094c190729dda1fac8342f921b037c4765500cea968517af790107d31cb818905",
  },
  {
    id: 26,
    title: "Z",
    image: "https://storage.googleapis.com/kagglesdsdata/datasets/1388661/2302731/Indian/Z/0.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20250215%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250215T084032Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=74cbce45c252a45cf646b941ae41675687b6c06e7f95f92e447cd36065ed3a9faf05bb5ef620c0257f86c5a6ff5c36a943c2abe566fdc41b624d571b9a7a0b500c2c077e75ef159c55ecbd2de9bb441ee01b371aa0e6799687f448b190792017adda84305e4fe16da0d1b4561d9bb7c9d425edf3702cfb1edae53a4c4471005e96fa7944783e15fcb5288181f34de40e8b07f0dab99980758a6f4c584c90269ab331b1a2a3a6bdfe9bae2efe455f5caba80487fc9a486f92a82cb14ab0ca123562791e9fd714b6a4d19a733aafe367ee447c1cb9d1d43b76320014c0531e2a67de50b6c3240db83f54acc240edb22e7125cf07b446106453ba2a8edfa0fc716d",
  },
  
];

const CourseCard = ({ course }) => {
  return (
    <>
    
    <div className="relative bg-white dark:bg-slate-950 course-card shadow-lg rounded-2xl overflow-hidden p-4 transition-transform transform hover:scale-105 group w-40 h-40 flex items-center justify-center text-xl font-bold m-8">
      <div className="absolute inset-0 flex text-3xl dark:text-blue-500 items-center justify-center group-hover:opacity-0 transition-opacity">
        {course.title}
      </div>
      <img
        src={course.image}
        alt={course.title}
        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity rounded-md"
      />
    </div>
    </>
  );
};

const CourseGrid = () => {
  return (
    <div className="max-w-6xl mx-auto py-10">
      <h1 className="text-3xl  mb-6 font-bold ml-10 dark:text-blue-500">Complete ISL Alphabet Module</h1>
      <div className="flex flex-row flex-wrap ">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
      <Modbtn/>
    </div>
  );
};

export default CourseGrid;
