import React, {useState, useEffect} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {HeaderSelector} from './swoopstats/performance_header';
import {
  faCalendar,
  faChevronUp,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';
import {motion, AnimatePresence} from 'framer-motion';


export const HeaderSelector = ({ text, index, selected, setActive, classType }) => {
  return (
    <div
      className={classType}
      onClick={() => setActive(index)}
      style={{
        backgroundColor: index === selected ? "#b56be9" : "transparent",
        color: index === selected ? "black" : "black",
        transition: "background-color 1s",

      }}
    >
      {" "}
      {text}{" "}
    </div>
  );
};

export const Calendar = () => {
  const MONTH_NAMES = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());
  const [no_of_days, setNumDays] = useState([]);
  const [blankdays, setBlankDays] = useState([]);
  const [showDatepicker, setShowDatepicker] = useState(true);
  const [datepickerValue, setDatepickerValue] = useState('');
  const [range, setRange] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const titles = ['Single Day', 'Range'];
  const [firstDate, setFirstDate] = useState(null);
  const [secondDate, setSecondDate] = useState(null);




  useEffect(() => {
    console.log(`Month changed to: ${month}`);
    getNoOfDays();
  }, [month]);

  const initDate = () => {
    let today = new Date();

    setDatepickerValue(() =>
      new Date(year, month, today.getDate()).toDateString()
    );
  };

  // Checks if the day is the current day
  const isToday = (date) => {
    const today = new Date();
    const d = new Date(year, month, date);

    return today.toDateString() === d.toDateString() ? true : false;
  };

  // Gets an actual date value from the calendar number passed in 
  const getDateValue = (date) => {
    let selectedDate = new Date(year, month, date);
    setFirstDate(() => selectedDate)
    setDatepickerValue(() => selectedDate.toDateString());
    setShowDatepicker(() => false);
  };

  // Calculates the number of days in the given month
  const getNoOfDays = () => {
    console.log(`Month: ${month}`);
    let daysInMonth = new Date(year, month + 1, 0).getDate();
    console.log(`${daysInMonth} days in ${MONTH_NAMES[month]}`);
    let dayOfWeek = new Date(year, month).getDay();

    let blankdaysArray = [];
    for (var i = 1; i <= dayOfWeek; i++) {
      blankdaysArray.push(i);
    }

    let daysArray = [];
    for (var i = 1; i <= daysInMonth; i++) {
      daysArray.push(i);
    }

    setBlankDays(() => blankdaysArray);
    setNumDays(() => daysArray);
  };

  // Calculates the range in days between the first and second date
  const evalRange = (date) => {
    let selectedDate = new Date(year, month, date);

    if (!firstDate) {
      setFirstDate(selectedDate);
      return;
    }
    setSecondDate(selectedDate);
    // setShowDatepicker(() => false);
    let difference =
      (selectedDate.getTime() - firstDate.getTime()) / (1000 * 60 * 60 * 24);
    console.log(`Difference in days: ${difference}`);
  };

  // Checking to see if the date has been selected or not
  const dateFromDay = (date) => {
    let newDate = new Date(year, month, date);

    if (firstDate !== null && secondDate !== null) {
      return (
        newDate.toDateString() == firstDate.toDateString() ||
        newDate.toDateString() == secondDate.toDateString()
      );
    }

    if (firstDate !== null) {
      return newDate.toDateString() == firstDate.toDateString();
    }
    return false;
  };

  // Checking to see which days are between the first and second date
  const betweenDays = (date) => {
    let newDate = new Date(year, month, date);

    if (firstDate !== null && secondDate !== null) {
      return newDate <= secondDate && newDate >= firstDate;
    }
  };

  useEffect(() => {
    // This function can be used to do computations when the date is changed
    if (firstDate !== null && secondDate !== null) {
      setDatepickerValue(() => {
        return firstDate.toDateString() + ' - ' + secondDate.toDateString();
      });
    }

    if(firstDate !== null && !range) {
      console.log('First date set not on range')
    }
  }, [firstDate, secondDate]);

  useEffect(() => {
    initDate();
    getNoOfDays();
  }, []);

  return (
    <div className=' antialiased sans-serif'>
      <div className='container mx-auto px-4 py-2'>
        <div className=' w-72'>
          <div className='relative'>
            <input type='hidden' name='date' />

            <div
              onClick={() => {
                setShowDatepicker(() => !showDatepicker);
                console.log(showDatepicker);
              }}
              className='flex justify-center items-center border border-grey-400 rounded-lg m-2 w-auto h-8 cursor-pointer'>
              <FontAwesomeIcon icon={faCalendar} />
              <p className='font-skylight text-xs font-thin mx-4'>
                {datepickerValue.toString()}
              </p>
              <FontAwesomeIcon
                icon={showDatepicker ? faChevronUp : faChevronDown}
              />
            </div>
            <AnimatePresence initial={false}>
             {showDatepicker && (
                <motion.div
                  className='bg-white mt-10 rounded-lg shadow p-4 absolute top-0 left-0 w-full'
                  initial='collapse'
                  animate='open'
                  exit='collapsed'
                  variants={{
                    open: {opacity: 1},
                    collapsed: {opacity: 0},
                  }}
                  transition={{duration: 0.5, ease: 'easeIn'}}>
                  <div className='flex items-center'>
                    {titles.map((title, index) => {
                      return (
                        <HeaderSelector
                          classType={
                            'font-skylight text-xs font-normal rounded-lg border border-black cursor-pointer h-8 w-full flex justify-center items-center m-1'
                          }
                          key={index}
                          text={title}
                          index={index}
                          selected={selectedIndex}
                          setActive={(index) => {
                            setRange(index == 1 ? true : false);
                            setSelectedIndex(() => index);
                          }}
                        />
                      );
                    })}
                  </div>
                  <motion.div
                    className='flex justify-between items-center'
                    initial='collapse'
                    animate='open'
                    exit='collapsed'
                    variants={{
                      open: {opacity: 1},
                      collapsed: {opacity: 0},
                    }}
                    transition={{duration: 0.5, ease: 'easeIn'}}>
                    <div>
                      <span className='text-lg font-bold text-gray-800 font-skylight'>
                        {' '}
                        {MONTH_NAMES[month]}
                      </span>
                      <span className='ml-1 text-lg text-gray-600 font-normal font-skylight'>
                        {' '}
                        {year}
                      </span>
                    </div>{' '}
                    <div>
                      <button
                        type='button'
                        className='transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 p-1 rounded-full'
                        disabled={month == 0 ? true : false}
                        onClick={() => {
                          console.log(`Left button`);
                          setMonth((prev) => prev - 1);
                        }}>
                        <svg
                          className='h-6 w-6 text-gray-500 inline-flex'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'>
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M15 19l-7-7 7-7'
                          />
                        </svg>
                      </button>
                      <button
                        type='button'
                        className='transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-700 p-1 rounded-full'
                        disabled={month == 11 ? true : false}
                        onClick={() => {
                          console.log(`Right button`);

                          setMonth((prev) => prev + 1);
                        }}>
                        <svg
                          className='h-6 w-6 text-gray-500 inline-flex'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'>
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M9 5l7 7-7 7'
                          />
                        </svg>
                      </button>
                    </div>
                  </motion.div>{' '}
                  <motion.div
                    className='flex flex-wrap mb-3 -mx-1'
                    initial='collapse'
                    animate='open'
                    exit='collapsed'
                    variants={{
                      open: {opacity: 1, height: 'auto'},
                      collapsed: {opacity: 0, height: 0},
                    }}
                    transition={{duration: 0.5, ease: 'easeIn'}}>
                    {DAYS.map((day, index) => {
                      return (
                        <div className='px-1' key={index}>
                          <div
                            key={index}
                            className='text-gray-800 font-medium text-center text-xs w-7 font-skylight'>
                            {day}
                          </div>
                        </div>
                      );
                    })}
                  </motion.div>
                  <motion.div
                    className='flex flex-wrap -mx-1'
                    initial='collapse'
                    animate='open'
                    exit='collapsed'
                    variants={{
                      open: {opacity: 1, height: 'auto'},
                      collapsed: {opacity: 0, height: 0},
                    }}
                    transition={{duration: 0.5, ease: 'easeIn'}}>
                    {blankdays.map((day, index) => {
                      return (
                        <div className='px-1 mb-1' key={index}>
                          <div
                            key={index}
                            className='cursor-pointer text-center text-sm rounded-lg leading-loose font-skylight w-7 text-gray-700'>
                            {}
                          </div>
                        </div>
                      );
                    })}
                    {no_of_days.map((day, index) => {
                      return (
                        <div className='px-1 mb-1' key={index}>
                          <div
                            key={index}
                            onClick={() => {
                              range ? evalRange(day) : getDateValue(day);
                            }}
                            className='cursor-pointer text-center text-sm rounded-lg leading-loose w-7  hover:bg-blue-400 font-skylight'
                            style={{
                              backgroundColor: isToday(day)
                                ? '#b56be9'
                                : dateFromDay(day) || betweenDays(day)
                                ? '#add8e6 '
                                : 'white',
                              color: 'black',
                            }}>
                            {' '}
                            {day}
                          </div>
                        </div>
                      );
                    })}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};