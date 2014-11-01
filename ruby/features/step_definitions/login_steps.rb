Given(/^I am on the home page$/) do
  visit 'http://www.marksandspencer.com/'
end

Given(/^I take a screenshot "(.*?)"$/) do |filename|
  page.save_screenshot filename
end

Then(/^I should see a link "(.*?)"$/) do |content|
  expect(page).to have_link content
end

Then(/^I should see "(.*?)"$/) do |content|
  expect(page).to have_content content
end

Then(/^I click link "(.*?)"$/) do |link|
  click_link link
end

When /I sign in/ do
  fill_in 'login-username', :with => 'nicholas.jackson@marks-and-spencer.com'
  fill_in 'login-password', :with => 'EddyMerckx47'

  click_button 'sign in'
end
