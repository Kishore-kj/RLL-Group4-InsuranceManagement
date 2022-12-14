package com.insurance.management;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.assertNotEquals;
import static org.junit.Assert.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.Date;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.insurance.management.model.Approvals;
import com.insurance.management.model.Category;
import com.insurance.management.model.Disapproved;
import com.insurance.management.model.Policies;
import com.insurance.management.model.Queries;
import com.insurance.management.model.User;
import com.insurance.management.repository.ApprovalsRepository;
import com.insurance.management.repository.ApprovedRepository;
import com.insurance.management.repository.CategoryRepository;
import com.insurance.management.repository.DisapprovedRepository;
import com.insurance.management.repository.PoliciesRepository;
import com.insurance.management.repository.QueriesRepository;
import com.insurance.management.repository.UserRepository;

@SpringBootTest
class ManagementApplicationTests {
	@Autowired
	private ApprovalsRepository approvalsRepository;
	@Autowired
	private ApprovedRepository approvedRepository;
	@Autowired
	private DisapprovedRepository disapprovedRepository;
	@Autowired
	private CategoryRepository categoryRepository;
	@Autowired
	private PoliciesRepository policiesRepository;
	@Autowired
	private QueriesRepository queriesRepository;
	@Autowired
	private UserRepository userRepository;

	@Test
	public void addPolicy() {
		Policies policies = new Policies();
		policies.setPolicyId(1);
		policies.setPolicyName("LIC");
		policies.setCategory("Health");
		policies.setAmount(200000.00);
		policies.setTenureInYears(5);
		policiesRepository.save(policies);
		assertNotNull(policiesRepository.findById(1).get());
	}

	@Test
	public void addUser() {
		User user = new User();
		user.setUserid(1);
		user.setUserName("kishore");
		user.setMobile(9876543219L);
		user.setPassword("123456");
		user.setEmail("kishore@gmail");
		userRepository.save(user);
		assertNotNull(userRepository.findById("kishore").get());
	}

	@Test
	public void addQueries() {
		Queries queries = new Queries();
		queries.setUsername("kishore");
		queries.setQueryId("12");
		queries.setQuestion("Serverdown");
		queriesRepository.save(queries);
		assertNotNull(queriesRepository.findById("kishore").get());
	}

	@Test
	public void addCategory() {
		Category policycategory = new Category();
		policycategory.setCategory("Health");
		categoryRepository.save(policycategory);
		assertNotNull(categoryRepository.findById("Health").get());
	}

	@Test
	public void addApprovels() {
		Approvals approvals = new Approvals();
		approvals.setRequestId(8);
		approvals.setPolicyId(10);
		Date date = new Date();
		approvals.setDate(date);
		approvals.setStatus("pending");
		approvals.setUserName("kishore");
		approvalsRepository.save(approvals);
		assertNotNull(approvalsRepository.findById("kishore").get());
	}

	@Test
	public void addApproved() {
		com.insurance.management.model.Approved approved = new com.insurance.management.model.Approved();
		approved.setPolicyId(5);
		approved.setRequestId(2);
		Date date = new Date();
		approved.setDate(date);
		approved.setStatus("Success");
		approved.setUserName("kishore");
		approvedRepository.save(approved);
		assertNotNull(approvedRepository.findById("kishore").get());

	}

	@Test
	public void adddisApproved() {
		Disapproved disapproved = new Disapproved();
		disapproved.setPolicyId(10);
		disapproved.setRequestId(2);
		Date date = new Date();
		disapproved.setDate(date);
		disapproved.setStatus("Success");
		disapproved.setUserName("kishore");
		disapprovedRepository.save(disapproved);
		assertNotNull(disapprovedRepository.findById("kishore").get());

	}

	@Test
	public void policies() {
		List<Policies> list = policiesRepository.findAll();
		assertThat(list).size().isGreaterThan(0);
	}

	@Test
	public void user() {
		List<User> list = userRepository.findAll();
		assertThat(list).size().isGreaterThan(0);
	}

	@Test
	public void AllQueries() {
		List<Queries> list = queriesRepository.findAll();
		assertThat(list).size().isGreaterThan(0);
	}

	@Test
	public void categories() {
		List<Category> list = categoryRepository.findAll();
		assertThat(list).size().isGreaterThan(0);
	}

	@Test
	public void AllApprovals() {
		List<Approvals> list = approvalsRepository.findAll();
		assertThat(list).size().isGreaterThan(0);
	}

	@Test
	public void AllDisapproved() {
		List<Disapproved> list = disapprovedRepository.findAll();
		assertThat(list).size().isGreaterThan(0);
	}

	@Test
	public void AllApproved() {
		List<com.insurance.management.model.Approved> list = approvedRepository.findAll();
		assertThat(list).size().isGreaterThan(0);
	}

	@Test
	public void getPolicy() {
		Policies policies = policiesRepository.findById(1).get();
		assertEquals(5, policies.getTenureInYears());
	}

	@Test
	public void getUser() {
		User user = userRepository.findById("kishore").get();
		assertEquals("kishore", user.getUserName());
	}

	@Test
	public void Approval() {
		Approvals approvals = approvalsRepository.findById("kishore").get();
		assertEquals(8, approvals.getRequestId());
	}

	@Test
	public void getQuery() {
		Queries queries = queriesRepository.findById("kishore").get();
		assertEquals("Appupdate", queries.getQuestion());
	}

	@Test
	public void category() {
		Category category = categoryRepository.findById("Health").get();
		assertEquals("Health", category.getCategory());
	}

	@Test
	public void Approved() {
		com.insurance.management.model.Approved approved = approvedRepository.findById("kishore").get();
		assertEquals(5, approved.getPolicyId());
	}

	@Test
	public void Disapproved() {
		Disapproved disapproved = disapprovedRepository.findById("kishore").get();
		assertEquals(10, disapproved.getPolicyId());
	}

	@Test
	public void updatePolicy() {
		Policies policies = policiesRepository.findById(1).get();
		policies.setPolicyName("HDFC");
		policies.setCategory("Health");
		policies.setAmount(400000.00);
		policies.setTenureInYears(10);
		policiesRepository.save(policies);
		assertNotEquals(200000.00, policiesRepository.findById(1).get().getAmount());
		assertNotEquals("LIC", policiesRepository.findById(1).get().getPolicyName());
		assertNotEquals("Healt", policiesRepository.findById(1).get().getCategory());
		assertNotEquals(5, policiesRepository.findById(1).get().getTenureInYears());
	}

	@Test
	public void updateUser() {
		User user = userRepository.findById("kishore").get();
		user.setUserName("kishore");
		user.setPassword("654321");
		user.setMobile(9123456789L);
		user.setEmail("kishore@yahoo.com");
		userRepository.save(user);
		assertEquals("kishore", userRepository.findById("kishore").get().getUserName());
		assertNotEquals(9876543219L, userRepository.findById("kishore").get().getMobile());
		assertNotEquals("123456", userRepository.findById("kishore").get().getPassword());
		assertNotEquals("kishore@gmail.com", userRepository.findById("kishore").get().getPassword());
	}

	@Test
	public void updateQuery() {
		Queries queries = queriesRepository.findById("kishore").get();
		queries.setQuestion("Appupdate");
		queriesRepository.save(queries);
		assertNotEquals("Serverdown", queriesRepository.findById("kishore").get().getQuestion());
	}

	@Test
	public void deleteCategory() {
		categoryRepository.deleteById("Health");
		assertThat(categoryRepository.existsById("Health")).isFalse();
	}

}
