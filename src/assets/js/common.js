import Vue from 'vue'
import fetchUtil from '@/api/fetch'
export function checkNull(val) { //判断非空
    var reg = /^\s*$/g;
    if (reg.test(val)) {
        return true;
    } else {
        return false;
        //输入框不为空
    }
}
export function isNotIn(arr, str) { //判断是否刷新
    var b = [];
    b = arr.split(',');
    var size = 0;
    size = b.length;
    var vo = true;
    for (var i = 0; i < size; i++) {
        if (b[i] == str) {
            vo = false;
        }
    }
    return vo;
}
export function filterData(data) { //删除为空字段
    for (var key in data) {
        if (data[key] == "") {
            delete data[key];
        }
    }
    return data;
}
export function filterData_null(data) { //删除为空字段
    for (var key in data) {
        if (data[key] == "" || data[key] == null || data[key] == 0) {
            alert("1111")
            delete data[key];
        }
    }
    return data;
}



export function datedifference(sDate1, sDate2) { //sDate1和sDate2是2006-12-18格式  
    var dateSpan,
        tempDate,
        iDays;
    sDate1 = Date.parse(sDate1);
    sDate2 = Date.parse(sDate2);
    dateSpan = sDate2 - sDate1;
    dateSpan = Math.abs(dateSpan);
    iDays = Math.floor(dateSpan / (24 * 3600 * 1000));
    return iDays
};

export function reversejudgeStatus(is_enable) {
    var status_enable = "";
    if (is_enable == true) {
        return 1;
    } else {
        return 2;
    }
}

export function reverseTime(toNs) { //时间转时间戳
    return Date.parse(toNs);
}



export function format(time, format) {
    var t = new Date(time);
    var tf = function(i) { return (i < 10 ? '0' : '') + i };
    return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function(a) {
        switch (a) {
            case 'yyyy':
                return tf(t.getFullYear());
                break;
            case 'MM':
                return tf(t.getMonth() + 1);
                break;
            case 'mm':
                return tf(t.getMinutes());
                break;
            case 'dd':
                return tf(t.getDate());
                break;
            case 'HH':
                return tf(t.getHours());
                break;
            case 'ss':
                return tf(t.getSeconds());
                break;
        }
    })
}


export function setHeight() { //设置form的高度
    if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth) {
        var winHeight = document.documentElement.clientHeight - 15;
        var o = document.getElementById('gridlist');
        return winHeight - 231; //设置高度
    }
}

export function getNowFormatDate() { //获得当前时间带时分秒 YYYY-MM-DD HH-MM-SS
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate +
        " " + date.getHours() + seperator2 + date.getMinutes() +
        seperator2 + date.getSeconds();
    return currentdate;
}

export function getNowFormatDate2(datas) { //获得当前时间带时分秒 YYYY-MM-DD HH-MM-SS
    var date = new Date(datas);
    // var seperator1 = "-";
    // var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + month + strDate;
    return currentdate;
}

export function isInt(val) {
    var re = /^[0-9]+.?[0-9]*$/; //判断字符串是否为数字     //判断正整数 /^[1-9]+[0-9]*]*$/   
    if (re.test(val)) {
        if (val % 1 === 0) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}