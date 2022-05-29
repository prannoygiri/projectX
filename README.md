# nodejs + Apollo + GraphQL + Strapi + Redis

## Stack

**api**: `nodejs` + `apollo graph server`

**Content Management System**: `Strapi`

**Container**: `docker compose`

## Pre-requisit
`docker Desktop` + `docker-compose` should be installed

## Run Project
```bash
docker-compose up -d
```

<pre>
                                          ┌──────────────────────────────────────────────────────────────────┐
                                          │                       docker compose network                     │
                                          ├──────────────────────────────────────────────────────────────────┤
                                          │                                                                  │
                                          │ ┌────────┐                                                       │
                                          │ │        │                      ┌───────────┐                    │
┌───┐  http://localhost:25080/api/upload  │ │        │ api:3000/api/upload  │           │                    │
│   │ ──────────────────────────────────► │ │        │ ───────────────────► │           │                    │
│   │                                     │ │        │                      │ api:30000 │                    │
│   │  http://localhost:25080/graphql     │ │        │ api:3000/grapql      │           │                    │
│   │ ──────────────────────────────────► │ │        │ ───────────────────► │           │                    │
│   │                                     │ │        │                      └─┬─container                    │
│   │                                     │ │        │                        │                              │
│   │                                     │ │        │                        ├──► ┌────────────┐            │
│ B │                               exposes │        │                        │    │ redis:6379 │            │
│ r │                                  port │        │                        │    └────container            │
│ o │                                 25080 │nginx:80│                        │                              │
│ w │                                     │ │        │                        │    strapi:1337/query         │
│ s │                                     │ │        │                        └──► ┌─────────────┐           │
│ e │  http://localhost:25080/strapi      │ │        │ strapi:1337/strapi          │             │           │
│ r │ ──────────────────────────────────► │ │        │ ──────────────────────────► │             │           │
│   │                                     │ │        │                             │ strapi:1337 │           │
│   │  http://localhost:25080/capi/query  │ │        │ strapi:1337/query           │             │           │
│   │ ──────────────────────────────────► │ │        │ ──────────────────────────► │             │           │
│   │                                     │ │        │                             └─────container           │
│   │                                     │ │        │                                       │               │
│   │                                     │ │        │                                       └─► ┌─────────┐ │
│   │                                     │ │        │                      ┌──────────────┐     │ db:3306 │ │
│   │  http://localhost:25080/adminer     │ │        │ adminer:8080         │ adminer:8080 │ ──► └─container │
└───┘ ──────────────────────────────────► │ └─container ──────────────────► └──────container                 │
                                          │                                                                  │
                                          └──────────────────────────────────────────────────────────────────┘
Note: The endpoints http://localhost:25080/api/* & http://localhost:25080/graphql
      are the only public endpoints
      The remaining routes are only for development purpose and are not available in production
</pre>
