CREATE TABLE Students (
  StudentID INT PRIMARY KEY,
  Name VARCHAR(255),
  PIN VARCHAR(20) UNIQUE,
  PhoneNumber VARCHAR(15),
  DOB DATE,
  Address VARCHAR(255),
  ImageLink VARCHAR(255)
);

CREATE TABLE Branches (
  BranchID INT PRIMARY KEY,
  BranchName VARCHAR(255)
);

CREATE TABLE Semesters (
  SemesterID INT PRIMARY KEY,
  SemesterNumber INT,
  BranchID INT,
  FOREIGN KEY (BranchID) REFERENCES Branches(BranchID)
);

CREATE TABLE Subjects (
  SubjectID INT PRIMARY KEY,
  SubjectName VARCHAR(255),
  SemesterID INT,
  FOREIGN KEY (SemesterID) REFERENCES Semesters(SemesterID)
);

CREATE TABLE Labs (
  LabID INT PRIMARY KEY,
  LabName VARCHAR(255),
  SemesterID INT,
  FOREIGN KEY (SemesterID) REFERENCES Semesters(SemesterID)
);

CREATE TABLE Enrollment (
  StudentID INT,
  SemesterID INT,
  PRIMARY KEY (StudentID, SemesterID),
  FOREIGN KEY (StudentID) REFERENCES Students(StudentID),
  FOREIGN KEY (SemesterID) REFERENCES Semesters(SemesterID)
);
