interface Props {
    timestamp: number;
}

// تابع تبدیل تایم‌استمپ یونیکس به تاریخ شمسی
const FormatDate = ({timestamp}: Props) => {

    return new Intl.DateTimeFormat('fa-IR').format(timestamp)


};

export default FormatDate;
