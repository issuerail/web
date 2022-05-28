# web

[![Build Status](https://github.com/issuerail/web/workflows/ci/badge.svg?branch=main&event=push)](https://github.com/issuerail/web/actions?query=workflow%3Aci)
[![codecov](https://codecov.io/gh/issuerail/web/branch/main/graph/badge.svg?token=AP8HMAC3PZ)](https://codecov.io/gh/issuerail/web)
[![License](https://img.shields.io/github/license/issuerail/web.svg)](https://github.com/issuerail/web/blob/main/LICENSE)
[![Tag](https://img.shields.io/github/tag/issuerail/web.svg)](https://github.com/issuerail/web/tags)



## Introduction

*web* is the web of [issuerail](https://github.com/issuerail) written in Vue.

If you want to give it a try, you can install it for free (see section below) or you can just use the online
[demo](https://demo-issuerail.vercel.app) hosted on Vercel.

Demo credentials are :

- Email: admin@demo.com
- Password: admin



## Prerequisites

- Vue >= 3.0.0



## Run

```bash
export SERVER_API_URL=http://127.0.0.1:8081
yarn start
```



## Docker

```bash
docker build ghcr.io/issuerail/web:latest
docker run -p 443:443 -p 8080:80 ghcr.io/issuerail/web:latest
```



## License

Project License can be found [here](LICENSE).



## Reference

- [dashblocks-template](https://github.com/slanatech/dashblocks-template)
- [expense-tracker](https://github.com/rbretecher/expense-tracker)
- [monorail](https://bugs.chromium.org/p/gerrit/issues/list)
- [quasar](https://quasar.dev)
- [quasar-awesome](https://github.com/quasarframework/quasar-awesome)
- [vue](https://vuejs.org)
- [vue-quasar-admin](https://github.com/wjkang/vue-quasar-admin)
