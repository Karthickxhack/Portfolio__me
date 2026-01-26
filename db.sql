CREATE DATABASE portfolio_tracker;

USE portfolio_tracker;

CREATE TABLE visitors (
  id INT AUTO_INCREMENT PRIMARY KEY,
  ip_address VARCHAR(50),
  country VARCHAR(100),
  state VARCHAR(100),
  district VARCHAR(100),
  city VARCHAR(100),
  isp VARCHAR(150),
  visit_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);