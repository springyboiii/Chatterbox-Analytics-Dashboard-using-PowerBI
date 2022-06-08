# from flask import Flask
from flask import Flask, jsonify, request
import pandas as pd
import joblib
from flask_cors import CORS
import sklearn
import xgboost as xgb
api = Flask(__name__)
CORS(api)

@api.route('/predict')
def my_profile():
    response_body = {"Churn":"1"}
    # print(response_body)
    return response_body

@api.route('/sendData', methods =['POST'])
def sendData():
    data = request.json
    model = joblib.load("model_XGBClassifier.pkl")
    # print(xgb.__version__)
    X = pd.DataFrame([[data["ID"],data["AccountLength"],data["LocationCode"],data["InternationalPlan"],data["VoicdeMailPlan"],data["NoOfVMMessages"],data["TotalDayMins"],data["TotalDayCalls"],data["TotalDayCharge"],data["TotalEveMins"],data["TotalEveCalls"],data["TotalEveCharge"],data["TotalInternationalMins"],data["TotalInternationalCalls"],data["TotalInternationalCharge"],data["TotalNightMins"],data["TotalNightCalls"],data["TotalNightCharge"],data["CustomerServiceCalls"]]], columns = ['customer_id',
 'account_length',
 'location_code',
 'intertiol_plan',
 'voice_mail_plan',
 'number_vm_messages',
 'total_day_min',
 'total_day_calls',
 'total_day_charge',
 'total_eve_min',
 'total_eve_calls',
 'total_eve_charge',
 'total_night_minutes',
 'total_night_calls',
 'total_night_charge',
 'total_intl_minutes',
 'total_intl_calls',
 'total_intl_charge',
 'customer_service_calls'])
    # print(X.info())
    prediction = model.predict(X)[0]
    print(prediction)
    print(X.head())
    # print(data["ID"])
    return str(0)