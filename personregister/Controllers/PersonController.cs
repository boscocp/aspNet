using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PSQLConection.Models;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace personregister.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PersonController : ControllerBase
    {
        // GET: api/Person
        [HttpGet]
        public IEnumerable<Person> Get()
        {
            List<Person> persons = new List<Person>();
            PSQLConection.DataAccess.IDataAccessProvider dbPerson = new PSQLConection.DataAccess.DataAccessProvider();
            persons = dbPerson.GetPersonRecords();
            foreach (Person person in persons)
            {
                Console.WriteLine(person.Name + person.Id + " income " + person.Income + " birth " + person.BirthDate);
            }
            return persons;
        }

        // GET: api/Person/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Person
        [HttpPost]
        public void Post([FromBody] Person personJSON)
        {
            PSQLConection.DataAccess.IDataAccessProvider dbPerson = new PSQLConection.DataAccess.DataAccessProvider();
            dbPerson.AddPersonRecord(personJSON);
        }

        // PUT: api/Person/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/Person/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
