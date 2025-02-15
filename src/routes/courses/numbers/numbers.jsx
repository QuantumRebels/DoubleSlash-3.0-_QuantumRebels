import React from "react";
import Modbtn from './modbtn'
const courses = [
  {
    id: 1,
    title: "1",
    image: "https://storage.googleapis.com/kagglesdsdata/datasets/1388661/2302731/Indian/1/0.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20250215%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250215T054212Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=7ea02a17c5b850d31d5c7255538e33a278acab1d0279cf87913ee14fc66b9cb2c23509993acff9f867bc23be4734aedb82e6bebc230bafe6f55cc5950a16025f3b38cf1a01cd40701a7e1d6056b2f720d2b3b1e9b0acc7e23b3286ab2f5cb600f96a29001a95ebad11f34ae4e234d5290aed040609d24bd09e72b4d7ce538fcc3b8602133ea03d21fe23719a4838097047fe91a4da01e12d9c0f9ab3c86e5dae355362229747b750abdddb18a07623961ef54fc39ee27e4c44df5181a734378e543c6811817e236593186bd2f3ca5fc5e0081410f65f443fd1da5591dcac8e04bfc951d7a63d39d33ef766a2b42167410d44a757ba1a1966cd20a302b7b7d240",
  },
  {
    id: 2,
    title: "2",
    image: "https://storage.googleapis.com/kagglesdsdata/datasets/1388661/2302731/Indian/2/0.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20250215%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250215T133235Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=006d31b12d97358f20a67c3b6a82b4e0838aecaa02bdf00ff2fa554661f3d27517fb87a8823760be1cf05e14b16ef23fa8410d6ef61cd2ddefb20b891842935d594fbecda22f1c6e03e17c8eac55b0f4773396928082de1097dfdee7cab43da9d3dd76ea085b19cf4a7b8afdd6f68b4006ad64e542fb3ed898dc6383d9550bebfbae90f7995edcae14df122c1dcff69a1fff94ce069981fd52ef1f51dedc7b7fe7e59a85f9939e4c2b2c985f2139784103c80b6b5bee8c6b2e4ddeb8516c7fca851ddbe9c299ec3090aa707d095add0a3b166aae454d11350788244390dc2ffd01fc10ce72a8604ff9338c8f8a4d9689229db38ae04b71315310860e8b30cb2b",
  },
  {
    id: 3,
    title: "3",
    image: "https://storage.googleapis.com/kagglesdsdata/datasets/1388661/2302731/Indian/3/0.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20250215%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250215T133304Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=893c0371fd412b418a3c59f0231df3c86fa8170805fc138d3c30fff35fbb737885576536204f9f6ba832c86dac75fe6350e739fb03b8f42ef5b55a224499b1ed6c9a44ceddbca28f72b21f6f011fcf84ea00b08f9430dcc4f5a43f10dac2e7eed08313e8daef8d7ffb8437824fc6f8c9da94a49e36ca5b5efae11c7ce2db2ad8e1e8ddd7ab6463ea758116d7d19fcacd83a1ee2be2392e9d1c24c0f7f0ed87b9531948928b57c88d6b0f0d76054873d2bf7f06e5ef3559fc256d156eac686dea3a092735af804ffa59246fc8692ab9b7bcccb5d4760ce21142bbe8f9dd6171668d771b0355cfa7df24409004e714e37006388c6abbe3a829d3b534d246ffbb9f",
  },
  {
    id: 4,
    title: "4",
    image: "https://storage.googleapis.com/kagglesdsdata/datasets/1388661/2302731/Indian/4/0.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20250215%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250215T133335Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=89185ea443d3e110c9a08d5e6b46ea133f4cbf41af67c77b5488958106e731edd340bcec5af135c6e83c121946baea797dc8900b54dac4352d5adbbce037a10fde661aac6971d7f86d387e4bcf961271eafffab1465c096173a4190ada4a0a2c0204421f8574f686be4d47247dc47c332d374614e74ba17ac537298eb624ff41939decdb4c24a59c5b3f9ec9a6abca6c2f28636c02f0df6b38aa2f57ada2164e1187cc5a916a8e6a2aff7a4fba6b50f61ac9d77cb1914d8e3f706d301efa5142cbb068e18f5893d692b29862e28951a02e8a7657969d0ab39937b7ed4f1c9c451f569a27afa70998c909f766503e8370bb9131659cb84ba2077950ebbb974c11",
  },
  {
    id: 5,
    title: "5",
    image: "https://storage.googleapis.com/kagglesdsdata/datasets/1388661/2302731/Indian/5/0.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20250215%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250215T090901Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=b2635f7a2fa93dbc3d64d6ffbe20833c01cb3fe66d1e006ba3c1d3c8b0c2621bcdd801488a941ce94f6478c08e8b0da9286e43a01ce7897a8fd40dff492e5bd417fba1cc6f7a4b3f7c6ecb4d4a77ed8aa75c6c2cfda53753c4ba5c7dee308ef51f37a2e65491144f64c8f160010772a805c5117f1820dfd45e9f9e47691d5a762da410bf38743732d19462c1abcc50b89dc2f74dc05c3b1c92f3e9910c48243bf9f2a5c4f2a9c16b6ae051a0ee45a8ce4ec9b4e56f734146a6dc019ff64fb2371cb24c5ff5fe024d7f73e5684da1de401c0b73d3c8083a99257aa4770d6c25129edca56b98200c5de156e85074951e759b9303f656085cc5e42ff7b8c7904046",
  },
  {
    id: 6,
    title: "6",
    image: "https://storage.googleapis.com/kagglesdsdata/datasets/1388661/2302731/Indian/6/0.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20250215%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250215T133535Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=5f3febe76c35e2409bc7db2dd28a4ffec5410fb0e5f87fa8c9122af8f1916d7248c108c5543a6f189a233bda9d02489709a8fef760b13196b212e4e49ae7913d1fb118f40f4652962e5b6147bb824c2a52877ef930c2123c07d6105325db76f6acfc417f7ba2125a564df9aae41a70f68545ca0dcc77fb2545e3182d044f5eb38d5d56d234db0403841d2862d5709e31fe7ea3c37f75a15dd702d514dbfd6d9b6850f660ab467b21838c963d9aa6d51ac239797464deaab957f8ac28bcdd3f19a43042beb3fed22e903b30576a2c103bf6451c50a95b56dad65833a56837b4df506a9ae84f1fb155cbc68c6829fad62e1eb54c7d4c26d23ca55a999a9656afac",
  },
  {
    id: 7,
    title: "7",
    image: "https://storage.googleapis.com/kagglesdsdata/datasets/1388661/2302731/Indian/7/0.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20250215%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250215T133559Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=08a99bfc83fe915d6c806b61966824f470706ee5729f73365c5c0d21f30ff69208f06dc38932e229bbac6ba4b1e534bed7e69ff27470e43af5fb07497ad287d33cb0fa0084d68a54fc001ce3a5b84b42c9b82be3344920117747d4b4efc32eacf78c0cf8fe0aa5bc374a443ae2a790ccdaa397e624b0a7175437d7dd43636a595d790fd6ec8ddab2a056897b2a7cf1f844a0e24a1c51665581c6c64ec3d73605c646514c947a472180c49c3bd49ec3761777471e3be349d8124865e94e334a4b1a1abd4ec1ae589ade40304a9232a90331f6f8fe1045a7adb1e63d993b6d6728b56f2957f4e0027ef20e98cad924685978cdecbd7d2bd802d786970d35afc956",
  },
  {
    id: 8,
    title: "8",
    image: "https://storage.googleapis.com/kagglesdsdata/datasets/1388661/2302731/Indian/8/0.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20250215%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250215T133623Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=66a5f696767f99b74a470d697ac10754cf5647096df47ad1d651891e717ae2d7a5ffdcc8ec42307d1c847eba41a4c7d76a200331e1a8dc8ace8220d1b820e1a967272b818ab0ccacaa35e279dda1b36f761e4f00ce8c3866585d2fff0b16e9b3f6eb44d0aee785e309dbfd649de801c1ed45754db947d688edbdcf8f050969c52484f61f9d050fb17dce31bb2585bada4a81a8e6d69691e530b9658344399fb7b22bf08b949a78af105a1c3a30524c2250979bde5e91925fd33f8a19f2c329de3f2ae936db191b7ea009b0874273f0b61f4b47aa66622223cc16f8f6255f6acf03d28b11d7d8eb7204837141141a2bcbef5ba83afa0de8e8c1df9b641878fd2d",
  },
  {
    id: 9,
    title: "9",
    image: "https://storage.googleapis.com/kagglesdsdata/datasets/1388661/2302731/Indian/9/0.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20250215%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250215T133648Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=5d9bdaba46204caede93c3db06377f4dc0deb8a8ea1dd096a56287cccc8f9a692120915c425f173c7e35a1f518e6d9a287816dd5e859d38d50a108b2a75938b73ef50aad16e50f17f1ae19a06b20159caef1d88d3e9e1001ba141f4b5aed52b837d1011265f59416bd0376389d6084dfc77e30df4110d602456f0ad7030ee3164d3d1da28f776f63ab0dcdf6473cafc640d43d4db710c098e39cc028bd20d8599b7f6c80ba5ac2f5e7cbaa76084d8f2b5af21ffaf296c774fb8a328f773260e4a5e650af8b0671cc69c3e205d37316ab0db2d93bc1668963d6f33447332596a5dbd9522c6c35aad161b16bd3afe1004af930c623fe564c6138960d5976a15a2f",
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
      <h1 className="text-3xl  mb-6 font-bold ml-10 dark:text-blue-500">Complete ISL Number Module</h1>
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

