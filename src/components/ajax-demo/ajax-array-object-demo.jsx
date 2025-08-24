import axios from "axios";
import React, { useEffect, useState } from "react";
import "./ajax-array-object-demo.css"

export function AjaxArrayObjectDemo() {
  const [courses, setCourses] = useState([
    { title: "", duration: "", faculty: "", image: "" },
  ]);

  useEffect(() => {
    axios.get("courses.json").then((response) => setCourses(response.data));
  }, []);
  return (
    <div className="container-fluid">
      <main className="d-flex flex-wrap mt-4">
        {courses.map((course,idx) => (
          <div key={idx} className="card m-2 p-2 w-25">
            <img src={course.image} className="card-img-top" height="120" />
            <div className="card-header">
              <div className="fw-bold">{course.title}</div>
            </div>
            <div className="card-body">
              <dl>
                <dt>Faculty:</dt>
                <dd>{course.faculty}</dd>
                <dt>Duration:</dt>
                <dd>{course.duration}</dd>
              </dl>
            </div>
            <div className="card-footer">
                <button className="btn btn-primary w-100 ">
                Join Course
                </button>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
