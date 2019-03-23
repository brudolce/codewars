SELECT id, name
FROM departments
WHERE EXISTS
  (SELECT * FROM departments
  INNER JOIN sales
  ON departments.id=sales.department_id
  WHERE price > 98.00);
