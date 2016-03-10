# Blabber

:tada:

1. Make all of the blabs show up on the page (**LOAD** blabs).
2. Make only one blab show up on the page (**FETCH** a blab).
3. Create a new blab (**GENERATE** a blab).
4. Remove a blab (**REMOVE** a blab).
5. Edit and save a blab (**CHANGE** a blab).

| Ajax Action  | Route   | Method   | Path         | Before       | After           |
|:------------:|:-------:|:---------|:-------------|:------------:|:---------------:|
| **LOAD**     | INDEX   | `GET`    | `/blabs/`    |              | forEach: render |
| **FETCH**    | SHOW    | `GET`    | `/blabs/:id` | id           | render          |
| **GENERATE** | CREATE  | `POST`   | `/blabs/`    | data         | render          |
| **REMOVE**   | DESTROY | `DELETE` | `/blabs/:id` | id, el       | remove          |
| **CHANGE**   | UPDATE  | `PUT`*   | `/blabs/:id` | id, data, el | re-render       |

> __*__ - or `PATCH`
