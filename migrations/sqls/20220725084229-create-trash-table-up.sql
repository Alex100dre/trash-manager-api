-- TRASH
CREATE TABLE trash (
    id VARCHAR(30) PRIMARY KEY,
    last_removal TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

INSERT INTO trash VALUES
('BROWN'),
('YELLOW');

-- DAY
CREATE TABLE day (
    id VARCHAR(30) PRIMARY KEY
);

INSERT INTO day VALUES
    ('MONDAY'),
    ('TUESDAY'),
    ('WEDNESDAY'),
    ('THURSDAY'),
    ('FRIDAY'),
    ('SATURDAY'),
    ('SUNDAY')
;

-- TRASH DAYS
CREATE TABLE trash_day (
    id SERIAL PRIMARY KEY,
    trash_id VARCHAR(30) NOT NULL,
    day_id VARCHAR(30) NOT NULL,
    CONSTRAINT fk_trash_id
        FOREIGN KEY (trash_id)
        REFERENCES trash (id)
        ON DELETE CASCADE
        ON UPDATE NO ACTION,
    CONSTRAINT fk_day_id
        FOREIGN KEY (day_id)
        REFERENCES day (id)
        ON DELETE CASCADE
        ON UPDATE NO ACTION
);

INSERT INTO trash_day (trash_id, day_id) VALUES
('BROWN', 'MONDAY'),
('BROWN', 'FRIDAY'),
('YELLOW', 'WEDNESDAY');