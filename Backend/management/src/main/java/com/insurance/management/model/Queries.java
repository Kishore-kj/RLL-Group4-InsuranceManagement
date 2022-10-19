package com.insurance.management.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "queries")
public class Queries {

	@Id
	@Column(name = "user_Name")
	private String userName;
	
	@Column(name = "queryid")
	private String queryid;
	
	
	@Column(name = "mailid")
	private String mailid;
	
	@Column(name = "question")
	private String question;
	

	public Queries() {
		
	}

	public Queries(String username,String queryid,String mailid,  String question) {
		super();
		this.userName = username;
		this.queryid = queryid;
		this.mailid = mailid;
		this.question = question;
	}

	public String getMailid() {
		return mailid;
	}

	public void setMailid(String mailid) {
		this.mailid = mailid;
	}

	public String getUserName() {
		return userName;
	}

	public void setUsername(String username) {
		this.userName = username;
	}

	public String getQueryid() {
		return queryid;
	}

	public void setQueryId(String queryId) {
		this.queryid = queryId;
	}

	public String getQuestion() {
		return question;
	}

	public void setQuestion(String question) {
		this.question = question;
	}


}
