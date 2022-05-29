using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TeamManagement.Models;
using TeamManagement.Repositories;

namespace TeamManagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly ITeamRepository _teamRepository;

        public UsersController(ITeamRepository teamRepository)
        {
            _teamRepository = teamRepository;
        }

        [HttpGet]
        public async Task<IEnumerable<User>> GetUsers()
        {
            return await _teamRepository.Get();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetUsers(int id)
        {
            return await _teamRepository.Get(id);
        }
        [HttpGet("login/{email}")]
        public async Task<ActionResult<User>> GetUsersbyemail(string email)
        {
            return await _teamRepository.GetByAddress(email);
        }

        [HttpPost]
        public async Task<ActionResult<User>> Postuser([FromBody] User user)
        {
            var newUser = await _teamRepository.Create(user);
            return CreatedAtAction(nameof(GetUsers), new { id = newUser.UserId }, newUser);
        }

        [HttpPut]
        public async Task<ActionResult> PutUsers(int id, [FromBody] User user)
        {
            if (id != user.UserId)
            {
                return BadRequest();
            }

            await _teamRepository.Update(user);

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var userToDelete = await _teamRepository.Get(id);
            if (userToDelete == null)
                return NotFound();

            await _teamRepository.Delete(userToDelete.UserId);
            return NoContent();
        }

    }
}
