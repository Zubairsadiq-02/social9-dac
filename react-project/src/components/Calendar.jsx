function Calendar() {
    return (
        <div className="calendar">

            <h2>Content Calendar</h2>

            <div className="calendar-grid">

                <div className="day">1</div>

                <div className="day">2</div>

                <div className="day">
                    3
                    <div className="post">
                        Instagram Post
                    </div>
                </div>

                <div className="day">4</div>

                <div className="day">5</div>

                <div className="day">
                    6
                    <div className="post">
                        LinkedIn Post
                    </div>
                </div>

                <div className="day">7</div>

            </div>

        </div>
    );
}

export default Calendar;