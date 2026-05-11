# ProfileApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**profileControllerCreate**](#profilecontrollercreate) | **POST** /profile | |
|[**profileControllerFindOne**](#profilecontrollerfindone) | **GET** /profile/{id} | |
|[**profileControllerGetProfile**](#profilecontrollergetprofile) | **GET** /profile | |
|[**profileControllerRemove**](#profilecontrollerremove) | **DELETE** /profile/{id} | |
|[**profileControllerUpdate**](#profilecontrollerupdate) | **PATCH** /profile/{id} | |

# **profileControllerCreate**
> profileControllerCreate(body)


### Example

```typescript
import {
    ProfileApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProfileApi(configuration);

let body: object; //

const { status, data } = await apiInstance.profileControllerCreate(
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **profileControllerFindOne**
> profileControllerFindOne()


### Example

```typescript
import {
    ProfileApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProfileApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.profileControllerFindOne(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **profileControllerGetProfile**
> ProfileDto profileControllerGetProfile()


### Example

```typescript
import {
    ProfileApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProfileApi(configuration);

const { status, data } = await apiInstance.profileControllerGetProfile();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ProfileDto**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | User profile |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **profileControllerRemove**
> profileControllerRemove()


### Example

```typescript
import {
    ProfileApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProfileApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.profileControllerRemove(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **profileControllerUpdate**
> profileControllerUpdate(body)


### Example

```typescript
import {
    ProfileApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProfileApi(configuration);

let id: string; // (default to undefined)
let body: object; //

const { status, data } = await apiInstance.profileControllerUpdate(
    id,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

