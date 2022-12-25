import React from "react";

const About = ({ teachersName }) => {
    return (
        <div className="card text-center">
            <div className="card-header">درباره سازنده</div>
            <div className="card-body">
                <h5 className="card-title">دوره جامع ری اکت</h5>
                <p className="card-text">مدرس : یونس قربانی</p>
                <a
                    href="https://toplearn.com/courses/2208/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%D8%AC%D8%A7%D9%85%D8%B9-react-js"
                    className="btn btn-primary"
                >
                    برو به دوره
                </a>
            </div>
            <div className="card-footer text-muted">
                زیاد نمونده تا دوره به پایان برسه
            </div>
        </div>
    );
};

export default About;
