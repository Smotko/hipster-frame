#
# file: migrations/0003.create-users.py
#
from yoyo import step

__depends__ = ['0001.create-users']

step(
    """
    CREATE TABLE groups
    (
        id serial,
        title text NOT NULL,
        description text,
        created_at timestamp with time zone NOT NULL,
        updated_at timestamp with time zone,
        CONSTRAINT pk_group PRIMARY KEY (id)
    );
    """,
    "DROP TABLE IF EXISTS groups;",
)

step(
    """
    CREATE TABLE user_groups
    (
        id serial,
        user_id integer REFERENCES users (id) ON DELETE CASCADE,
        group_id integer REFERENCES groups (id) ON DELETE CASCADE,
        created_at timestamp with time zone NOT NULL,
        updated_at timestamp with time zone,
        CONSTRAINT pk_user_group PRIMARY KEY (id),
        CONSTRAINT uq_user_group UNIQUE (user_id, group_id)
    );
    """,
    "DROP TABLE IF EXISTS user_groups;"
)