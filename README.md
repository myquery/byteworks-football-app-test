# ByteworksFootball

# 95% Completion of the Test Interview for Byteworks Limited

# FRAMEWORK USED IN DEVELOPMENT

# Boostrap 4
    I used bootstrap to quickly apply styled CSS to the page
# CSS pre-processor (Sass)
    Used a Sass library with .scss extension to apply styling

# Redux Pattern Architecture
    Implmented redux pattern architecture using redux-observable
 

# FontAwesome Library
    I used fontawesome to apply icons
    I used angular-redux/store 


# Angular Framework
    I used Angular 8.3.20 as my Front End 
    
# Responsiveness
    Laptop and mobile phone target for now

# Redux Version Issue
    ERROR in ../node_modules/@angular-redux/store/components/ng-redux.d.ts:10:31 - error TS2420: Class 'NgRedux' incorrectly implements interface 'ObservableStore'.
    Property '[Symbol.observable]' is missing in type 'NgRedux' but required in type 'ObservableStore'.

    10 export declare abstract class NgRedux implements ObservableStore 

    the redux team acknowledges this bug, so to serve the app, ticker with the app.module.ts like say try saving the file a second time after serving it of which the above error will show.

