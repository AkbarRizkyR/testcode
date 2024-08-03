import { useState, useEffect, useRef } from 'react';
import { format, addMonths, subMonths, isToday } from 'date-fns';
import { MdClose, MdCalendarToday } from 'react-icons/md';
import PropTypes from 'prop-types';

function DateInput({ value, onChange }) {
    const [selectedDate, setSelectedDate] = useState(value || null);
    const [showCalendar, setShowCalendar] = useState(false);
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const calendarRef = useRef(null);

    useEffect(() => {
        setSelectedDate(value);
        setCurrentMonth(value || new Date());
    }, [value]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (calendarRef.current && !calendarRef.current.contains(event.target)) {
                setShowCalendar(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const daysInMonth = (date) => {
        const end = new Date(date.getFullYear(), date.getMonth() + 1, 0);
        return Array(end.getDate()).fill(null).map((_, i) => new Date(date.getFullYear(), date.getMonth(), i + 1));
    };

    const handleDayClick = (date) => {
        setSelectedDate(date);
        setShowCalendar(false);
        onChange(date);
    };

    const handleMonthChange = (direction) => {
        setCurrentMonth((prev) => direction === 'next' ? addMonths(prev, 1) : subMonths(prev, 1));
    };

    const clearDate = () => {
        setSelectedDate(null);
        onChange(null);
    };

    return (
        <div className="relative" ref={calendarRef}>
            <div className="flex items-center relative">
                <input
                    type="text"
                    value={selectedDate ? format(selectedDate, 'dd/MM/yyyy') : 'Select date'}
                    onClick={() => setShowCalendar(!showCalendar)}
                    readOnly
                    className="border border-gray-300 p-3 rounded-lg text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg w-full"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    {selectedDate && (
                        <button
                            onClick={clearDate}
                            className="text-gray-600 hover:text-gray-800"
                            aria-label="Clear date"
                        >
                            <MdClose size={20} />
                        </button>
                    )}
                    <button
                        onClick={() => setShowCalendar(!showCalendar)}
                        className="ml-2 text-gray-600 hover:text-gray-800"
                        aria-label="Open calendar"
                    >
                        <MdCalendarToday size={20} />
                    </button>
                </div>
            </div>

            {showCalendar && (
                <div className="absolute bottom-full left-0 mb-2 p-4 border border-gray-300 bg-white rounded-lg shadow-xl z-50">
                    <div className="flex items-center justify-between mb-4">
                        <button
                            onClick={() => handleMonthChange('prev')}
                            className="text-gray-500 hover:text-gray-700 text-lg"
                        >
                            &lt;
                        </button>
                        <span className="text-lg font-semibold">{format(currentMonth, 'MMMM yyyy')}</span>
                        <button
                            onClick={() => handleMonthChange('next')}
                            className="text-gray-500 hover:text-gray-700 text-lg"
                        >
                            &gt;
                        </button>
                    </div>
                    <div className="grid grid-cols-7 gap-2 text-center text-sm">
                        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                            <div key={day} className="font-semibold text-gray-600">{day}</div>
                        ))}
                        {daysInMonth(currentMonth).map((date) => (
                            <button
                                key={date.toString()}
                                onClick={() => handleDayClick(date)}
                                className={`p-2 rounded-full hover:bg-blue-200 focus:outline-none ${isToday(date) ? 'bg-blue-100' : ''} ${selectedDate && date.toDateString() === selectedDate.toDateString() ? 'bg-blue-300 text-white' : 'text-gray-700'}`}
                            >
                                {date.getDate()}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

DateInput.propTypes = {
    value: PropTypes.instanceOf(Date),
    onChange: PropTypes.func.isRequired,
};

export default DateInput;