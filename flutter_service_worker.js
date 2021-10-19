'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "a694a3b07a3152975d19cb5f09f8868f",
"assets/assets/1.jpg": "7bbdfd7d0f14ffc2d4aced4fa1e92949",
"assets/assets/2.jpg": "fc4ade36f8d16ae60d472f88639a710e",
"assets/assets/3.jpg": "dba7967de839375e661622be24647548",
"assets/assets/applogo.png": "e57f700e8e00ef7532669521f1b9d463",
"assets/assets/avatar.png": "7342c388fe028550c4e633c3c75aaf08",
"assets/assets/cache.png": "4053c70757b2fff375e1fa7d69714778",
"assets/assets/dashboard2/cust.png": "0079db676e1b2993e436e8e8eb61cfef",
"assets/assets/dashboard2/d3.png": "bc17e987cabbd49cc08a46fb5a9ca1df",
"assets/assets/dashboard2/d4.png": "64fb2981ebee9dcfbeca9ff151a32fea",
"assets/assets/dashboard2/d5.png": "e50b412ead99de4cffb177f6dd969710",
"assets/assets/dashboard2/d6.png": "8b4edf1ae59c4733596cea37c6c04b77",
"assets/assets/dashboard2/dashboard1.png": "64f76de3078993439434c41606129dad",
"assets/assets/dashboard2/dashboard2.png": "6c66193431f8b3cc946a6b504ce761a5",
"assets/assets/dashboard2/dashboard3.png": "ac1f048ada0ee1376c0b3a49cb48128d",
"assets/assets/dashboard2/dashboard4.png": "34d10a40063b292fe78faf90d8f04f55",
"assets/assets/dashboard2/dashboard5.png": "6cd7813554dbdcf0106d867dbfef48b2",
"assets/assets/dashboard2/dashboard6.png": "21c5c9cf03d7281bc0b6c3e882d2e200",
"assets/assets/dashboard2/dashboard7.png": "e9235f285f5430250f234727ff0c6c0b",
"assets/assets/dashboard2/ds1.jpg": "3894b26dd2c158fc0952165cd1d9bb30",
"assets/assets/dashboard2/ds10.jpg": "cc67a18f7de2509f7835d6f352a209f7",
"assets/assets/dashboard2/ds11.jpg": "24042d16b1d276dbc0444594e7a5a79e",
"assets/assets/dashboard2/ds12.jpg": "986d6ad795427908a6897dee1aa148dd",
"assets/assets/dashboard2/ds13.jpg": "32a788f99a8867151c3c4ebcf32efbe0",
"assets/assets/dashboard2/ds14.jpg": "7a1253dac14eb8bfda455c248d06e844",
"assets/assets/dashboard2/ds15.jpg": "f1ee360ade4eec4ebe9a318b2c28ab37",
"assets/assets/dashboard2/ds16.jpg": "29de245263b0b87b480e593c52802fe4",
"assets/assets/dashboard2/ds17.jpg": "2a721218ef0979eb65137e7efb52158b",
"assets/assets/dashboard2/ds18.jpg": "1f1d5bd9839b80b57762f3a83b10a16a",
"assets/assets/dashboard2/ds19.jpg": "3f0a41877b452267d18f93a5aac55fee",
"assets/assets/dashboard2/ds2.jpg": "6f0373462f6086f71090f9aaa04af54d",
"assets/assets/dashboard2/ds20.jpg": "6134d92496ee697d9fa4e7e77aae28aa",
"assets/assets/dashboard2/ds21.jpg": "b46e388b9b3361ad8cad84a8403709b9",
"assets/assets/dashboard2/ds3.jpg": "54fdd08c25632531c7f55e8ce6adbeb3",
"assets/assets/dashboard2/ds4.jpg": "1ad70517a7a7cb13458d572040d0fe5d",
"assets/assets/dashboard2/ds5.jpg": "ffeca6768058be5563d83cd8f726ec2e",
"assets/assets/dashboard2/ds6.jpg": "ea3208ec48c215b6ef776f17ddc5ce98",
"assets/assets/dashboard2/ds7.jpg": "61d197f8a2bd45158857a8517c4b552e",
"assets/assets/dashboard2/ds8.jpg": "b5572e7f37ec0b8459cb21b15cb0277a",
"assets/assets/dashboard2/ds9.jpg": "cb8928f6520b48afa934227414944f04",
"assets/assets/dashboard2/insta.png": "0093d2bdf7024798cdd049289ac5b7ac",
"assets/assets/dashboard2/phone.png": "f298916920fe681694ed7c1517c533af",
"assets/assets/dashboard2/prov.png": "1cb43dfc9b034e5d8758ec1cdbe07ae6",
"assets/assets/dashboard2/tg.png": "480744b6cb9c2a9710edc24a07731127",
"assets/assets/dashboard2/whatsapp.png": "d8a328db05458bd7e272bb90a280893b",
"assets/assets/dashboard2/www.png": "454c626efb92eb06ec79b12a284e3ceb",
"assets/assets/elements/checkbox10.png": "7a80a3a76efe9e696a5d91463a1064b1",
"assets/assets/elements/checkbox10_off.png": "852d0a38859fd94da32d75f4fe2d537b",
"assets/assets/elements/checkbox12.png": "580f3a48559894a0285b1d7065faeecd",
"assets/assets/elements/checkbox12_off.png": "c528cecf985cf08f82d7924daa0fe36d",
"assets/assets/fonts/Montserrat-Bold.ttf": "ade91f473255991f410f61857696434b",
"assets/assets/fonts/Montserrat-ExtraBold.ttf": "19ba7aa52a78c3896558ac1c0a5fb4c7",
"assets/assets/fonts/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/nofound.png": "88407864fb2e1256e183b2d93cd97ea9",
"assets/assets/ondemands/001-chat.png": "d49062a94dac9562eefaee431955b5c5",
"assets/assets/ondemands/008-user.png": "0246595e72e69c95edc1a9604f3b093f",
"assets/assets/ondemands/031-book.png": "8cf5f47b0fad77ca2e47dc6458daf9bd",
"assets/assets/ondemands/cache.png": "4053c70757b2fff375e1fa7d69714778",
"assets/assets/ondemands/home.png": "95dc781260a29df17c85d573e6d8e942",
"assets/assets/ondemands/notifyicon.png": "05e27b6833bc361cde6a92d1097eb47b",
"assets/assets/ondemands/ondemand1.png": "fe2b0f3db13c9de76005f4bb3147c978",
"assets/assets/ondemands/ondemand10.png": "6bf4df2d05b5ccabf53185af84f85f67",
"assets/assets/ondemands/ondemand11.png": "5ad9354488c24e9f1bc069bc94e98fcd",
"assets/assets/ondemands/ondemand12.png": "f5e1fe488e516bd65e3cd19423e4aa4d",
"assets/assets/ondemands/ondemand13.png": "5cc71e25d584a7b38d22e8570d6a4582",
"assets/assets/ondemands/ondemand15.png": "077d92eb6484306fcaeb31b4e1b5eda2",
"assets/assets/ondemands/ondemand17.png": "cf22ff7369b76677c26d22c125070269",
"assets/assets/ondemands/ondemand18.png": "dd43813a1311cc52a4e27720da35ea23",
"assets/assets/ondemands/ondemand19.png": "fb75728f1f351842dd098d371e150079",
"assets/assets/ondemands/ondemand2.png": "f97763263cb5c52eea234b2ef868426a",
"assets/assets/ondemands/ondemand20.png": "cb62096ceb7a9fe771fafec4f8f56948",
"assets/assets/ondemands/ondemand21.png": "1880f04971da8c81de04aa31ace44ce9",
"assets/assets/ondemands/ondemand22.jpg": "b86be6a21af5fd0c4880c8f75aaf2835",
"assets/assets/ondemands/ondemand23.jpg": "88f62388e26b9047d9b70fa5e36ab1fd",
"assets/assets/ondemands/ondemand23.png": "d6ec4939d8bc1f0e604c7eb2d08ac1ce",
"assets/assets/ondemands/ondemand24.png": "3706629a281cae06d072e8e936aa71a2",
"assets/assets/ondemands/ondemand25.png": "f87dca20ce2e8927093aeb1b8e8c698a",
"assets/assets/ondemands/ondemand26.png": "6fa7a4ff909c9c54eeabed6aaa438396",
"assets/assets/ondemands/ondemand27.png": "64fcf219abb3a9bb3c561bda97ed1863",
"assets/assets/ondemands/ondemand28.png": "9e45a7e9eb7c84e3550ad8f1043551ee",
"assets/assets/ondemands/ondemand29.png": "97a8dbfdddda64f2c818499a151796e7",
"assets/assets/ondemands/ondemand3.png": "6d5c88d7a97c7465255ec6a44ffe8984",
"assets/assets/ondemands/ondemand30.png": "459b1f6694ca08295ac9712a3484ef03",
"assets/assets/ondemands/ondemand31.png": "2060904c4a60551924b72fd687040d56",
"assets/assets/ondemands/ondemand32.png": "a561165f247e821be944291642d42895",
"assets/assets/ondemands/ondemand33.png": "92533a54bc9313356eb7b9835aac6217",
"assets/assets/ondemands/ondemand4.png": "ede28c8c871436c9a5d0cd47a00cb2a7",
"assets/assets/ondemands/ondemand5.png": "50dec1e29fd0d8d1e243d2170886b9fc",
"assets/assets/ondemands/ondemand6.png": "69fea13611576ff516572d10264c884b",
"assets/assets/ondemands/ondemand7.png": "ec829ed8b9bacfc128b98155ff136c35",
"assets/assets/ondemands/ondemand8.png": "f3c0647fcea8b54ce7759ab652aebe94",
"assets/assets/ondemands/ondemand9.png": "6e7de839b43ab4db27ed4a6b7bbf9331",
"assets/assets/ondemands/p1.jpg": "ec8eb8bc633077e31b5bc09f86e845dd",
"assets/assets/ondemands/p10.png": "5b4c5ce14a1c67140fbf12447995a834",
"assets/assets/ondemands/p11.jpg": "81c2d8cfee6b5741cbf8ecefe51ec9a5",
"assets/assets/ondemands/p12.jpg": "924a0fe12a524f6e063a1c9e9fe53265",
"assets/assets/ondemands/p13.jpg": "d7a86f4fbbf8d72cd9dab261b43312aa",
"assets/assets/ondemands/p14.jpg": "a6329c17f1fe53a0622333b950e21498",
"assets/assets/ondemands/p15.jpg": "4be3b134d4694ab12fa2531530471bdb",
"assets/assets/ondemands/p16.jpg": "052a9f92048064ed3fbe69b9fd75633f",
"assets/assets/ondemands/p17.jpg": "f80122ab579734f9a683f8de09345685",
"assets/assets/ondemands/p18.jpg": "e3d859b472c93fe5092ee4814304a46f",
"assets/assets/ondemands/p19.jpg": "cf85638b770c381f070c6c62451c07e4",
"assets/assets/ondemands/p2.jpg": "2441cfd529c8ed74a8763dd385ab6a9e",
"assets/assets/ondemands/p20.jpg": "cb34fec2225002bb1b5a6cf4030a3aba",
"assets/assets/ondemands/p21.jpg": "2320029d5f8a77d858f41a707dbd2dfc",
"assets/assets/ondemands/p22.jpg": "8c1fb3a4cc6d7a685d0d4c788fac93e4",
"assets/assets/ondemands/p23.jpg": "591c514fc3df415b8e8092add7ca78ce",
"assets/assets/ondemands/p24.jpg": "47a7a9d460b891629335b66bb3fc3383",
"assets/assets/ondemands/p25.jpg": "7f884992ed45bf97645b133a2fa288ca",
"assets/assets/ondemands/p26.jpg": "541457c2cd2b658c6012937a483fb479",
"assets/assets/ondemands/p27.jpg": "39207b276a757ff56563fe4e29051978",
"assets/assets/ondemands/p28.jpg": "9168fc61f59c54a9a8ced5795ddd060e",
"assets/assets/ondemands/p29.jpg": "6593e871ac108342d2311327b151a615",
"assets/assets/ondemands/p3.jpg": "634fa1e1eaa95f7f8bec48b98e7566fd",
"assets/assets/ondemands/p30.jpg": "e90d6c2738ec1a17e37b161ee16f669c",
"assets/assets/ondemands/p31.jpg": "6049f065f4061b8e13b925851ec3b3b6",
"assets/assets/ondemands/p32.jpg": "13bf7f94a7dfde0e957f6e22d6d72736",
"assets/assets/ondemands/p33.jpg": "4e6d674a28959f99b360c14f07d29b0e",
"assets/assets/ondemands/p34.jpg": "8f74d15612c385a907e4f1cbc09f2549",
"assets/assets/ondemands/p35.jpg": "a2cd3af2eea6bd177cc0cc7435c90db0",
"assets/assets/ondemands/p36.png": "e3a185aa0ed6e9a0b5799d47f98a3164",
"assets/assets/ondemands/p37.jpg": "2b6aeb73ead9b527afd1744c833ca47b",
"assets/assets/ondemands/p38.jpg": "6fd46b0c98db2ab29374c89dbbd64f10",
"assets/assets/ondemands/p39.jpg": "711237e569daf6d160325c6e93f9d527",
"assets/assets/ondemands/p4.jpg": "095a923b63c8d44b416ddb8fff70f4d2",
"assets/assets/ondemands/p40.jpg": "4081b639ab3eeddae9269e2b640a9a95",
"assets/assets/ondemands/p41.jpg": "a39b5dd454654817ccaa8d7870183c5f",
"assets/assets/ondemands/p42.jpg": "bab2d5aeebe06be27187cfc242e00033",
"assets/assets/ondemands/p5.jpg": "6608fd811e81695ccf22c30e92880e9c",
"assets/assets/ondemands/p6.jpg": "dd9a9777eb027f07d6001e8e4da32123",
"assets/assets/ondemands/p7.jpg": "a06221a054a3dcb6012b5239f78c28f6",
"assets/assets/ondemands/p8.jpg": "28e3425cc6d5cc1e49104c527c16eb32",
"assets/assets/ondemands/p9.jpg": "acd6d5b30c53244ccb4595bde810275a",
"assets/assets/ondemands/paypal.png": "7761f1ba3d6da2b1169c30e504c19bcb",
"assets/assets/ondemands/razorpay.png": "73baa2911dd65f9153050ee5c8bf3aec",
"assets/assets/ondemands/stripe.png": "734f989611f664db28fe1f53b61726dd",
"assets/assets/paypal.png": "7761f1ba3d6da2b1169c30e504c19bcb",
"assets/assets/razorpay.png": "73baa2911dd65f9153050ee5c8bf3aec",
"assets/assets/sound.mp3": "a476c131f944ce25a9034d571ff37d3d",
"assets/assets/stripe.png": "734f989611f664db28fe1f53b61726dd",
"assets/assets/user1.jpg": "cf3a08b6965beff9df3381216b828eb6",
"assets/assets/user5.png": "7342c388fe028550c4e633c3c75aaf08",
"assets/FontManifest.json": "f3bf890456546863d1bbadbb896adc07",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "00069a37b98b9fcd7a02cee5f86d38bc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/html_editor_enhanced/assets/font/summernote.eot": "f4a47ce92c02ef70fc848508f4cec94a",
"assets/packages/html_editor_enhanced/assets/font/summernote.ttf": "82fa597f29de41cd41a7c402bcf09ba5",
"assets/packages/html_editor_enhanced/assets/font/summernote.woff": "c1a96d26d30d9e0b2fd33c080d88c72e",
"assets/packages/html_editor_enhanced/assets/font/summernote.woff2": "f694db69cded200e4edd999fddef81b7",
"assets/packages/html_editor_enhanced/assets/jquery.min.js": "b61aa6e2d68d21b3546b5b418bf0e9c3",
"assets/packages/html_editor_enhanced/assets/plugins/summernote-at-mention/summernote-at-mention.js": "8d1a7c753cf1a4cd0058e31fa1e5376e",
"assets/packages/html_editor_enhanced/assets/summernote-lite-dark.css": "3f3cb618d1d51e3e6d0d4cce469b991b",
"assets/packages/html_editor_enhanced/assets/summernote-lite.min.css": "cadfcf986f26d830521e9a63350f4dbd",
"assets/packages/html_editor_enhanced/assets/summernote-lite.min.js": "4fe75f9b35f43da141d60d6a697db1c1",
"assets/packages/html_editor_enhanced/assets/summernote-no-plugins.html": "89ca56cd85a91f1dc39f5413204e24d0",
"assets/packages/html_editor_enhanced/assets/summernote.html": "8ce8915ee5696d3c568e94911eb0d9bf",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"favicon.ico": "e358e61ebac3c4a9226c1dbcf589ad60",
"favicon.png": "a3430a8c56d1d5ad2c69715db09fee3b",
"icons/Icon-192.png": "2770054d2c061d088afa5c1c07c47dd2",
"icons/Icon-512.png": "a7adfb808f5e3fca424bbc17324b4fac",
"index.html": "85ba09410a21f769c85bb15382bf6f79",
"/": "85ba09410a21f769c85bb15382bf6f79",
"main.dart.js": "fdffc6e7d0f04717393f657f50cbcd74",
"manifest.json": "2d889aec25335a7f18c045665731ab0a",
"styles.css": "87844c27dc538d60a1d838886923aeff",
"version.json": "f529c26d3b5b3da5f7d68e9f8ddf6653"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
