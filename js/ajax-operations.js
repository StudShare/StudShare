function doAjax(url, type, dataType, headers, data)
{
    return $.ajax
    ({
        url: url,
        type: type,
        dataType: dataType,
        headers: headers,
        data: data
    });
}