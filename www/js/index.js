/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        // Create two variable with the names of the months and days in an array
		var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]; 
		var dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
		
		var tickTime = 1000;
		//Start counting
		setInterval( function() {
		// Create a newDate() object
		var newDate = new Date();
		var currentTime = newDate;
		
		// Extract the current date from Date object
		newDate.setDate(newDate.getDate());
		
		// Output the day, date, month and year   
		$('.date').html(
		dayNames[newDate.getDay()] + " " + newDate.getDate() + ' ' + monthNames[newDate.getMonth()] + ' ' + newDate.getFullYear()
		);
		
		//setInterval( function() {
			
				//var milliseconds = currentTime.getMilliseconds();
				// Add a leading zero to seconds value
				//$("#millisec").html(Math.round(( milliseconds < 10 ? "0" : "" ) + milliseconds / 10));
				//// Create a newDate() object and extract the seconds of the current time on the visitor's
				////var seconds = new Date().getSeconds();
				//var seconds = currentTime.getSeconds();
				// Add a leading zero to seconds value
				//$("#sec").html(( seconds < 10 ? "0" : "" ) + seconds);
			//},1000);
			
		//setInterval( function() {
				// Create a newDate() object and extract the minutes of the current time on the visitor's
				//var minutes = new Date().getMinutes();
				var minutes = currentTime.getMinutes();
				// Add a leading zero to the minutes value
				$(".min").html(( minutes < 10 ? "0" : "" ) + minutes);
			//},1000);
			
		//setInterval( function() {
				// Create a newDate() object and extract the hours of the current time on the visitor's
				//var hours = new Date().getHours();
				var hours = currentTime.getHours();
				
				$(".ampm").html(( hours < 12 ? "AM" : "PM" ));
				// Convert the hours component to 12-hour format if needed
				hours = ( hours > 12 ? hours - 12 : hours );
				// Convert an hours component of "0" to "12"
				hours = ( hours == 0 ? 12 : hours );
				
				// Add a leading zero to the hours value
				//$(".hours").html(( hours < 10 ? "0" : "" ) + hours );
				$(".hours").html( hours );
				
				
				
			}, tickTime);
			
			///////////////////////////////////////////////////////////////////
			
				
		}
};
