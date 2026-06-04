CREATE TABLE building (
    building_id SERIAL PRIMARY KEY,
    
    name VARCHAR(255) NOT NULL,
    
    description TEXT,
    
    slug VARCHAR(255) UNIQUE NOT NULL,
    
    latitude DECIMAL(10, 8) NOT NULL,
    
    longitude DECIMAL(11, 8) NOT NULL,
    
    floor TEXT[] NOT NULL
);
INSERT INTO building (
    name,
    description,
    slug,
    latitude,
    longitude,
    floor
)
VALUES (
    'Indanan Anni Hall',
    'A three-storey building with rooftop facilities.',
    'indanan-anni-hall',
    13.62177500,
    123.19482400,
    ARRAY['1st Floor', '2nd Floor', '3rd Floor', 'Rooftop']
);

CREATE TABLE office (
    office_id SERIAL PRIMARY KEY,

    name VARCHAR(255) NOT NULL,

    description TEXT,

    building_id INTEGER NOT NULL,

    CONSTRAINT fk_office_building
        FOREIGN KEY (building_id)
        REFERENCES building(building_id)
        ON DELETE CASCADE
);

INSERT INTO office (
    name,
    description,
    building_id
)
VALUES (
    'CCS Dean Office',
    'Office of the College of Computing Studies dean and faculty staff.',
    1
);

CREATE TABLE rooms (
    room_id SERIAL PRIMARY KEY,

    name VARCHAR(255) NOT NULL,

    type VARCHAR(100) NOT NULL,

    building_id INTEGER NOT NULL,

    CONSTRAINT fk_room_building
        FOREIGN KEY (building_id)
        REFERENCES building(building_id)
        ON DELETE CASCADE
);

INSERT INTO rooms (
    name,
    type,
    building_id
)
VALUES (
    'Computer Laboratory 1',
    'Laboratory',
    1
);

CREATE TABLE employee (
    employee_id SERIAL PRIMARY KEY,

    name VARCHAR(255) NOT NULL,

    position VARCHAR(255) NOT 
);

INSERT INTO employee (
    name,
    position
)
VALUES (
    'Juan Dela Cruz',
    'Professor'
);

CREATE TABLE office_assign (
    office_assign_id SERIAL PRIMARY KEY,

    employee_id INTEGER NOT NULL,

    office_id INTEGER NOT NULL,

    role VARCHAR(255) NOT NULL,

    is_head BOOLEAN DEFAULT FALSE,

    CONSTRAINT fk_office_assign_employee
        FOREIGN KEY (employee_id)
        REFERENCES employee(employee_id)
        ON DELETE CASCADE,

    CONSTRAINT fk_office_assign_office
        FOREIGN KEY (office_id)
        REFERENCES office(office_id)
        ON DELETE CASCADE
);

INSERT INTO office_assign (
    employee_id,
    office_id,
    role,
    is_head
)
VALUES (
    1,
    1,
    'Dean',
    TRUE
);


///////
CREATE TABLE department (
    department_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    description TEXT
);


ALTER TABLE office_assign
ADD COLUMN department_id INTEGER;

ALTER TABLE office_assign
ADD CONSTRAINT fk_office_assign_department
FOREIGN KEY (department_id)
REFERENCES department(department_id)
ON DELETE SET NULL;

ALTER TABLE office_assign
DROP COLUMN is_head;

ALTER TABLE office_assign
ADD COLUMN head_type VARCHAR(50) DEFAULT 'NONE';