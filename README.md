# Ben's Bike Shop Pizza Delivery Webhook

## URL

https://sendpizza.herokuapp.com

### **-----GET-----**

### [GET] "/" -- returns title

WHAT TO SEND

```JSON
None
```

WHAT YOU GET BACK

```JSON
  {
    "message": "Ben's Bike Shop Pizza Delivery Webhook"
  }
```

### **-----POST-----**

### [POST] "/hook" -- returns status 200 with varying messages

WHAT TO SEND

```JSON
Olark JSON-encoded transcript
```

WHAT YOU GET BACK - POSSIBLE RESPONSES

```JSON
{
    "message": "customer not located in NYC"
}
```

```JSON
{
    "message": "cannot triangulate without email address and phone number"
}
```

```JSON
{
    "message": "didn't mention pizza"
}
```

```JSON
{
    "message": "pizza time!"
}
```
